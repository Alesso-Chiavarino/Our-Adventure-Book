import './TaskDetail.scss';
import { useEffect, useState } from 'react';
import { useTask } from '../../context/TaskContext';
import { Navigate, useParams } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';

const TaskDetail = () => {

    const { getTask } = useTask()
    const { id } = useParams();
    const [task, setTask] = useState({});

    useEffect(() => {
        const loadTask = async () => {
            const res = await getTask(id)
            setTask(res.data);
        }
        loadTask();
    }, [])

    const navigate = useNavigate();

    return (
        <section className='task-detail-section'>
            <main className='mx-auto container flex flex-col items-center'>
                <h1>Our Task</h1>
                <div className='task-detail-container'>
                    <article className='task-detail flex flex-col justify-between items-center relative'>
                        <TbArrowBackUp className='icon absolute right-2 top-2' onClick={() => navigate(-1)} />
                        <div className='w-full px-10 top'>
                            <h2>{task.title}</h2>
                            <hr className='text-white w-3/4 h-1 mb-5 mx-auto' />
                        </div>
                        <p className='text-gray-400 desc px-10'>{task.description}</p>
                        <div className='p-1 text-gray-200 text-center bottom'>
                            <span>{task.date}</span>
                        </div>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default TaskDetail;