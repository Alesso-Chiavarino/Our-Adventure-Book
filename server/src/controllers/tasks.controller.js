import Task from "../models/Task.js";

export const getTasks = async (req, res) => {

    const {page, isDone} = req.query;
    // const {page} = req.query;

    if(req.query.isDone) {
        const tasks = await Task.paginate({
            done: isDone
        }, {
            limit: 12,
            page
        })

        return res.json(tasks)
    }

    if(req.query.page) {
        const tasks = await Task.paginate({
        }, {
            limit: 12,
            page
        })

        return res.json(tasks)
    }

    const tasks = await Task.paginate({}, {
        limit: 12,
    });

    res.json(tasks);

}

export const getTask = async (req, res) => {

    const {id} = req.params;

    const task = await Task.findById(id);

    if(!task) {
        return res.status(404).json({
            status: "error",
            error: "Task not found"
        })
    }

    res.json(task);
    
}

export const createTask = async (req, res) => {

    const {title, description, date, done} = req.body;

    const task = new Task({
        title,
        description,
        date,
        done
    })

    await task.save();

    res.json({
        status: "success",
        message: "Task created successfully",
        task
    });
}

export const updateTask = async (req, res) => {

    const {id} = req.params;

    const {title, description, date, done} = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, {
        title: title,
        description: description,
        date: date,
        done: done
    })

    if(!updatedTask) {
        return res.status(404).json({
            status: "error",
            error: "Task not found"
        })
    }

    res.json(updatedTask);
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if(!deletedTask) {
        return res.status(404).json({
            status: "error",
            error: "Task not found"
        })
    }

    res.json({
        status: "success",
        message: "Task deleted successfully",
        deletedTask
    });
}