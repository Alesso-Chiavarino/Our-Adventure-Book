import { useEffect, useState } from 'react';
import { useTask } from '../../context/TaskContext';
import Task from '../Task/Task';
import { SiTodoist } from 'react-icons/si'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import './TasksContainer.scss';
import { BsFillXSquareFill, BsFillCheckSquareFill } from 'react-icons/bs'
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
// import { getTask } from '../../../../server/src/controllers/tasks.controller';

const TasksContainer = () => {

    // const params = useParams();

    const { tasks, getTasks, updateTask } = useTask();

    useEffect(() => {
        getTasks('')
    }, [])

    const [isAll, setIsAll] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleIsAll = () => {
        setIsAll(true);
        setIsPending(false);
        setIsDone(false);
    }

    const handleIsPending = () => {
        setIsAll(false);
        setIsPending(true);
        setIsDone(false);
    }

    const handleIsDone = () => {
        setIsAll(false);
        setIsPending(false);
        setIsDone(true);
    }


    return (
        <section className='tasks-container'>
            <main className='container mx-auto'>
                <h1 className='tasks-container-title pt-5'>Our Tasks</h1>
                <div className='flex gap-5 pt-5'>
                    <aside>
                        {isAll ? <span className=' bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700' onClick={() => {
                            handleIsAll()
                            getTasks('')
                        }}><SiTodoist className='mb-1'
                            /> All</span> : <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 ' onClick={() => {
                                handleIsAll()
                                getTasks('')
                            }}><SiTodoist className='mb-1'
                            /> All</span>}

                        {!isPending ? <Link to='/tasks' onClick={() => {
                            handleIsPending()
                            getTasks(false)
                        }}>
                            <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 '> <BsFillXSquareFill /> Pending</span>
                        </Link> : <Link to='/tasks' onClick={() => {
                            handleIsPending()
                            getTasks(false)
                        }}>
                            <span className='bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700 '> <BsFillXSquareFill /> Pending</span>
                        </Link>}

                        {!isDone ? <Link to='/tasks' onClick={() => {
                            getTasks(true)
                            handleIsDone()
                        }}>
                            <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 '> <BsFillCheckSquareFill /> Done</span>
                        </Link> : <Link to='/tasks' onClick={() => {
                            getTasks(true)
                            handleIsDone()
                        }}>
                            <span className='bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700 '> <BsFillCheckSquareFill /> Done</span>
                        </Link>}
                    </aside>
                    <div className='card-task-container grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
                        {tasks.docs?.map((task) => <Task key={task._id} {...task} updateTask={updateTask} />)}
                    </div>
                </div>
            </main>
        </section>
    )
}

export default TasksContainer;