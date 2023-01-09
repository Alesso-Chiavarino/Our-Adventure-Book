import axios from "axios";

export const getTasksRequest = async (isDone) => {
    if(isDone === '') {
        return await axios.get('/api/tasks');
    }
    return await axios.get(`/api/tasks?isDone=${isDone}`);
}

export const getTaskRequest = async (id) => {
    return await axios.get(`/api/tasks/${id}`)
}

export const createTaskRequest = async (data) => {
    return await axios.post('/api/tasks', data)
}

export const updateTaskRequest = async (id, data) => {
    return await axios.put(`/api/tasks/${id}`, data)
}

export const deleteTaskRequest = async (id) => {
    return await axios.delete(`/api/tasks/${id}`);
}