import { useState, useEffect } from 'react';
import { useAdventure } from '../../context/AdventureContext';
import './TaskForm.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { RiSendPlaneFill } from 'react-icons/ri'
import { ThreeDots } from 'react-loader-spinner'
import { RxUpdate } from 'react-icons/rx'
import { TbArrowBackUp } from 'react-icons/tb'
import { useTask } from '../../context/TaskContext';

const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [isSubmit, setIsSubmit] = useState(false)

    const { createTask, getTask, updateTask } = useTask();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (params.id) {
            await updateTask(params.id, {
                title,
                description,
                date,
            })
            navigate(-1)
            return;
        }

        await createTask({
            title,
            description,
            date,
            done: false
        });
        setTitle('');
        setDescription('');
        setDate('');
        navigate(-1)
    }

    const params = useParams();

    useEffect(() => {
        const editHandler = async () => {
            if (params.id) {
                const res = await getTask(params.id);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setDate(res.data.date);
            }
        }
        editHandler();
    }, [getTask, params.id])

    const navigate = useNavigate();

    const handleArea = () => {
        if (params.id) {
            return handleButtons2()
        }
        return handleButtons()
    }

    const handleButtons = () => {
        if (isSubmit) {
            return (
                <button type="submit">Submiting
                    <ThreeDots
                        height="20"
                        width="30"
                        radius="9"
                        color="#02f0ac"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </button>
            )
        } else {
            return (
                <button type="submit" onClick={() => setIsSubmit(true)} ><RiSendPlaneFill /> Submit</button>
            )
        }
    }

    const handleButtons2 = () => {

        if (isSubmit) {
            return (
                <button type="submit">Updating
                    <ThreeDots
                        height="20"
                        width="30"
                        radius="9"
                        color="#02f0ac"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </button>
            )
        } else {
            return (
                <button type="submit" onClick={() => setIsSubmit(true)} ><RxUpdate /> Update</button>
            )
        }
    }



    return (
        <section className='form-container'>
            {params.id ? <h1 className='form-title'>Edit Task</h1> : <h1 className='form-title'>Create Task</h1>}

            <div className='card-container'>
                <TbArrowBackUp className='go-back-icon' onClick={() => navigate(-1)} />
                <span className='text-white go-back-icon'>  </span>
                <article className='card'>
                    <form onSubmit={handleSubmit}>
                        {params.id ? <h1>Edit a Task </h1> : <h1>Create a Task</h1>}
                        <div className="form-group">
                            <label htmlFor="name">Title</label>
                            <input type="text" className="form-control" id="name" value={title} placeholder='Type a title...' onChange={handleTitle} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Description</label>
                            <textarea className="form-control" id="message" value={description} placeholder='Type a description...' rows="3" onChange={handleDescription} ></textarea>
                        </div>


                        <div className='flex w-full'>

                            <div className='form-left'>
                                <div className="form-group date-form">
                                    <label htmlFor="name">Date</label>
                                    <input type="text" className="form-control" id="name" value={date} placeholder='Type a date...' onChange={handleDate} />
                                </div>

                            </div>

                        </div>

                        {handleArea()}
                    </form>
                </article>
            </div>
        </section>
    )
}

export default TaskForm;