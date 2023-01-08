import Brand from '../Brand/Brand';
import './Navbar.scss';
// import { MdEmail } from 'react-icons/md'
import { NavLink } from 'react-router-dom';

import InputSearch from '../InputSearch/InputSearch';
import { useSearch } from '../../context/SearchContext';

const Navbar = () => {

  const { getSearch } = useSearch();

  const resetSearch = () => {
    getSearch('');
  }

  return (
      <nav className='flex w-full nav-container justify-around py-5 items-center navbar text-white'>
        <Brand/>
        <ul className='flex gap-5'>
          <li><NavLink className='link' to="/" onClick={resetSearch} >Home</NavLink></li>
          <li><NavLink className='link' to="/adventures">Adventures</NavLink></li>
          <li><NavLink className='link' to="/new" onClick={resetSearch} >New Adventure</NavLink></li>
        </ul>
        <InputSearch/>
        {/* <MdEmail className='cursor-pointer text-lg mb-1'/> */}
      </nav>
    // </div>
  )
}

export default Navbar;