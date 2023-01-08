import axios from 'axios'

export const getAdventuresRequest = async () => {
    return await axios.get('/api/adventure');
}

export const getLimitedAdventuresRequest = async (limit, page, search) => {
    return await axios.get(`/api/adventure?limit=${limit}&page=${page}&search=${search}`);
}

export const getAdventureRequest = async (id) => {
    return await axios.get(`/api/adventure/${id}`);
}

export const createAdventureRequest = async (data) => {
    const form = new FormData()
    
    form.append('title', data.title)
    form.append('description', data.description)
    form.append('date', data.date)
    form.append('category', data.category)
    form.append('image', data.image)

    return await axios.post('/api/adventure', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const updateAdventureRequest = async (id, data) => {
    const form = new FormData()
    form.append('title', data.title)
    form.append('description', data.description)
    form.append('date', data.date)
    form.append('category', data.category)
    form.append('image', data.image)

    return await axios.put(`/api/adventure/${id}`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const deleteAdventureRequest = async (id) => {
    return await axios.delete(`/api/adventure/${id}`);
}