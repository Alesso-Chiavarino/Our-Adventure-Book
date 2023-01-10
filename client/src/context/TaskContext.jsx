import { useContext, createContext, useState } from "react"
import { getTasksRequest, getTaskRequest, createTaskRequest, updateTaskRequest, deleteTaskRequest } from "../api/Task.api"

const TaskContext = createContext()

export const useTask = () => {
    return useContext(TaskContext)
}


const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const getTasks = async (isDone, page) => {
        const tasks = await getTasksRequest(isDone, page);
        // console.log(tasks.data)
        setTasks(tasks.data);
    }

    const getTask = async (id) => {
        const task = await getTaskRequest(id);
        return task;
    }

    const createTask = async (task) => {
        const newTask = await createTaskRequest(task);
        setTasks([...tasks, newTask])
    }

    const updateTask = async (id, task) => {
        const updatedTask = await updateTaskRequest(id, task);
        const tasks = await getTasksRequest('');
        setTasks(tasks.data)
    }

    const deleteTask = async (id) => {
        await deleteTaskRequest(id);
        setTasks(tasks.filter(task => task._id !== id))
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            getTasks,
            getTask,
            createTask,
            updateTask,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;