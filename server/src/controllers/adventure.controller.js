import { uploadImage, deleteImage } from '../libs/cloudinary.js';
import Post from '../models/Post.js'
import fs from 'fs-extra'

export const getAdventures = async (req, res) => {

    try {

        const TotalAdventures = await Post.find()

        const adventures = await Post.paginate({}, {
            limit: TotalAdventures.length,
        })
        
        if(req.query.limit || req.query.page || req.query.search) {

            const search = req.query.search;
            const limitedAdventures = await Post.paginate({
                $or: [
                    {title: {$regex: search, $options: 'i'}},
                    {description: {$regex: search, $options: 'i'}},
                    {date: {$regex: search, $options: 'i'}},
                    {category: {$regex: search, $options: 'i'}},
                ]
            }, {
                limit: req.query.limit,
                page: req.query.page
            })

            return res.send(limitedAdventures);
        }

        res.send(adventures);

    } catch(error) {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }
}

export const getAdventure = async (req, res) => {

    const {id} = req.params;

    try {

        const adventure = await Post.findById(id)

        if(!adventure) return res.status(404).json({
            status: "error",
            error: "Post not found"
        })

        res.send(adventure);

    } catch(error) {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }
}

export const createAdventure = async (req, res) => {
    const {title, description, date, category} = req.body;
    let image;

    try {

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
            await fs.remove(req.files.image.tempFilePath);
        }

        const newPost = new Post({
            title,
            description,
            date,
            category,
            image
        })
    
        await newPost.save()
    
        res.json(newPost)

    } catch(error) {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }
}

export const updateAdventure = async (req, res) => {

    const {title, description, date, category} = req.body;
    let image;

    try {

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
            await fs.remove(req.files.image.tempFilePath);
        }

        const oldPost = await Post.findById(req.params.id)
        console.log('old post: ', oldPost)

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
            title,
            description,
            date,
            category,
            image
        })

        console.log(updatedPost)

        if(!updatedPost) return res.status(404).json({
            status: "error",
            error: "Post not found"
        })

        if(updatedPost.image.public_id) {
            await deleteImage(updatedPost.image.public_id)
        }

        res.json(updatedPost);
        
    } catch(error) {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }
}

export const deleteAdventure = async (req, res) => {

    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if(!deletedPost) return res.status(404).json({
            status: "error",
            error: "Post not found"
        })

        if(deletedPost.image.public_id) {
            await deleteImage(deletedPost.image.public_id)
        }

        return res.sendStatus(202);

    } catch(error) {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }
}