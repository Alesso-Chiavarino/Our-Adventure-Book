import {v2 as cloudinary} from 'cloudinary'
import {CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET} from '../config.js'

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET 
})

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'adventures',
    })
}

export const deleteImage = async (image_id) => {
    return await cloudinary.uploader.destroy(image_id)
}