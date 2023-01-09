import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import './Task.scss';
import { useState } from 'react';
import { useTask } from '../../context/TaskContext';


const Task = ({ title, description, updateTask, _id, done }) => {

    const [isCheck, setIsCheck] = useState(false);

    const handleCheck = () => {
        setIsCheck(!isCheck);
        updateTask(_id, { done: !done })
    }

    const resumedDescription = description.substring(0, 90)

    return (
        <article className='mb-3 bg-green-400 task cursor-pointer'>
            <div className='task-body h-full'>
                <div className='top h-1/4 p-3'>
                    <h5 className='card-title'>{title}</h5>
                    {done ? <ImCheckboxChecked className='mb-1 text-2xl cursor-pointer text-green-400 hover:text-slate-200' onClick={handleCheck} /> : <ImCheckboxUnchecked className='mb-1 text-white text-2xl cursor-pointer hover:bg-green-500' onClick={handleCheck} />}

                </div>
                <div className='flex flex-col justify-between h-3/4'>
                    <p className='card-text p-3'>{resumedDescription}...</p>
                    <div className="bottom text-gray-400 text-sm flex gap-2 pl-3 pb-1">
                        <span className='hover:text-gray-200'>Edit</span>
                        <span className='hover:text-gray-200'>Delete</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Task;