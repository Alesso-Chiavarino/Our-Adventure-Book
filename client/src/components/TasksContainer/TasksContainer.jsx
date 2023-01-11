import { useEffect, useState } from 'react';
import { useTask } from '../../context/TaskContext';
import Task from '../Task/Task';
import { SiTodoist } from 'react-icons/si'
import './TasksContainer.scss';
import { BsFillXSquareFill, BsFillCheckSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

const TasksContainer = () => {


    const { tasks, getTasks, updateTask, deleteTask } = useTask();

    useEffect(() => {
        getTasks('', 1)
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

    const handlePrevius = () => {
        if (isAll) {
            if (tasks.hasPrevPage) {
                return getTasks('', tasks.prevPage);
            }
        }
        if (isPending) {
            if (tasks.hasPrevPage) {
                return getTasks(false, tasks.prevPage);
            }
        }
        if (isDone) {
            if (tasks.hasPrevPage) {
                return getTasks(true, tasks.prevPage);
            }
        }
    }

    const handleNext = () => {
        if (isAll) {
            if (tasks.hasNextPage) {
                return getTasks('', tasks.nextPage);
            }
        }
        if (isPending) {
            if (tasks.hasNextPage) {
                return getTasks(false, tasks.nextPage);
            }
        }
        if (isDone) {
            if (tasks.hasNextPage) {
                return getTasks(true, tasks.nextPage);
            }
        }
    }

    return (
        <section className='tasks-container'>
            <main className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <span className='tasks-container-title collapse pt-5 '>+</span>
                    <h1 className='tasks-container-title pt-5'>Our Tasks</h1>
                    <Link className='bg-green-500 rounded-full w-9 h-9 text-3xl flex items-center justify-center text-white hover:bg-green-400' to='/tasks/form'>+</Link>
                </div>
                <div className='flex gap-5 pt-5'>
                    <aside>
                        {isAll ? <span className=' bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700' onClick={() => {
                            handleIsAll()
                            getTasks('', 1)
                        }}><SiTodoist className='mb-1'
                            /> All</span> : <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 ' onClick={() => {
                                handleIsAll()
                                getTasks('', 1)
                            }}><SiTodoist className='mb-1'
                            /> All</span>}

                        {!isPending ? <Link to='/tasks' onClick={() => {
                            handleIsPending()
                            getTasks(false, 1)
                        }}>
                            <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 '> <BsFillXSquareFill /> Pending</span>
                        </Link> : <Link to='/tasks' onClick={() => {
                            handleIsPending()
                            getTasks(false, 1)
                        }}>
                            <span className='bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700 '> <BsFillXSquareFill /> Pending</span>
                        </Link>}

                        {!isDone ? <Link to='/tasks' onClick={() => {
                            getTasks(true, 1)
                            handleIsDone()
                        }}>
                            <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 '> <BsFillCheckSquareFill /> Done</span>
                        </Link> : <Link to='/tasks' onClick={() => {
                            getTasks(true, 1)
                            handleIsDone()
                        }}>
                            <span className='bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700 '> <BsFillCheckSquareFill /> Done</span>
                        </Link>}
                    </aside>
                    <div className='card-task-container'>
                        <div className='flex justify-between mb-2'>
                            {!tasks.hasPrevPage ? <span className='flex w-20  bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handlePrevius}> <RxDoubleArrowLeft className='text-white' /> Previus</span> : <span className='flex btn-pagination text-white rounded-md justify-center items-center w-20 gap-1 text-sm px-2 py-1 cursor-pointer' onClick={handlePrevius}> <RxDoubleArrowLeft className='text-white' /> Previus</span>}

                            {!tasks.hasNextPage ? <span className='flex w-20  bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handleNext} >Next <RxDoubleArrowRight className='text-white' /></span> : <span className='flex btn-pagination text-white rounded-md justify-center items-center w-20 gap-1 text-sm px-2 py-1 cursor-pointer' onClick={handleNext} >Next <RxDoubleArrowRight className='text-white' /></span>}
                        </div>
                        {tasks.docs?.length === 0 && isAll ? <span className='text-white flex items-center gap-1'>No tasks yet </span> : null}
                        {tasks.docs?.length === 0 && isPending ? <span className='text-white flex items-center gap-1'><BsFillCheckSquareFill className='mb-1' />Tasks up to date </span> : null}
                        {tasks.docs?.length === 0 && isDone ? <span className='text-white flex items-center gap-1'><BsFillXSquareFill className='mb-1' />No tasks done </span> : null}
                        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
                            {tasks.docs?.map((task) => <Task key={task._id} {...task} deleteTask={deleteTask} updateTask={updateTask} isDone={isDone} isPending={isPending} getTasks={getTasks} isAll={isAll} />)}
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default TasksContainer;