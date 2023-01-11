import axios from "axios";

export const getTasksRequest = async (isDone, page) => {
    if(isDone === '') {
        return await axios.get(`/api/tasks?page=${page}`);
    }
    
    return await axios.get(`/api/tasks?isDone=${isDone}&page=${page}`);
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