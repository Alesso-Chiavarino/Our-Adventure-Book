import axios from 'axios';

export const getLettersRequest = () => {
    return axios.get('/api/letters');
}

export const getLetterRequest = (id) => {
    return axios.get(`/api/letters/${id}`);
}

export const createLetterRequest = (letter) => {
    return axios.post('/api/letters', letter);
}

export const updateLetterRequest = (id, letter) => {
    return axios.put(`/api/letters/${id}`, letter);
}

export const deleteLetterRequest = (id) => {
    return axios.delete(`/api/letters/${id}`);
}