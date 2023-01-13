import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import './Task.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Task = ({ title, description, updateTask, _id, done, deleteTask, isDone, isPending, getTasks, isAll }) => {

    const [isCheck, setIsCheck] = useState(false);

    const navigate = useNavigate();

    const handleCheck = () => {
        if (isDone) {
            setIsCheck(!isCheck);
            updateTask(_id, { done: !done }, true)
            return;
        }

        if (isPending) {
            setIsCheck(!isCheck);
            updateTask(_id, { done: !done }, false)
            return;
        }

        setIsCheck(!isCheck);
        updateTask(_id, { done: !done }, '')
        // return;
    }

    const handleDelete = () => {
        if (isDone) {
            deleteTask(_id, true)
            return;
        }

        if (isPending) {
            deleteTask(_id, false)
            return;
        }

        return deleteTask(_id, '')
    }

    const resumedDescription = description.substring(0, 90)


    return (
        <article className='mb-3 bg-green-400 task cursor-pointer' onClick={() => {
            navigate(`/tasks/detail/${_id}`);
            window.scroll(0,0);
        }}>
            <div className='task-body h-full'>
                <div className='top h-1/4 p-3'>
                    <h5 className='card-title'>{title}</h5>
                    {done ? <ImCheckboxChecked className='mb-1 text-2xl cursor-pointer text-green-400 hover:text-slate-200' onClick={(e) => {
                        e.stopPropagation();
                        handleCheck();
                    }} /> : <ImCheckboxUnchecked className='mb-1 text-white text-2xl cursor-pointer hover:bg-green-500' onClick={(e) => {
                        e.stopPropagation();
                        handleCheck();
                    }} />}

                </div>
                <div className='flex flex-col justify-between h-3/4'>
                    <p className='card-text p-3'>{resumedDescription}...</p>
                    <div className="bottom text-gray-400 text-sm flex gap-2 pl-3 pb-1">
                        <span className='hover:text-gray-200' onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/tasks/form/${_id}`)
                        }}>Edit</span>
                        <span className='hover:text-gray-200' onClick={(e) => {
                            e.stopPropagation();
                            handleDelete();
                        }}>Delete</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Task;