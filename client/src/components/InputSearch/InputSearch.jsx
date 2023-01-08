import './InputSearch.scss';
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';
import { useSearch } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

export const InputSearch = () => {

    const [search, setSearch] = useState('');

    const {getSearch} = useSearch();

    const navigate = useNavigate();

    const handleSearch= (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    const handleKey = (e) => {
        if(e.keyCode === 13) {
            getSearch(search);
            setSearch('')
            navigate('/adventures')
        }
    }

    return (

        <form onSubmit={(e) => e.preventDefault()}>
            <div className='flex items-center'>
                <AiOutlineSearch className='relative text-gray-300 left-7 text-xl' />
                <input type="search" className='text-gray-300 pl-8 input-search' name="" id="" value={search} placeholder='Search' onChange={handleSearch} onKeyDown={handleKey} />
            </div>
        </form>
    )
}

export default InputSearch;