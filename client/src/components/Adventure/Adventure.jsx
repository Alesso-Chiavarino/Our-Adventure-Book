import './Adventure.scss';
import { useAdventure } from '../../context/AdventureContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import 'animate.css';

const Adventure = ({ title, description, _id, image, date, id, category, setAllFilter, setFavoritesFilter }) => {

  const { deleteAdventure, updateAdventure, confirm } = useAdventure();
  const navigate = useNavigate();
  const delay = id * 120

  const limitedDescription = description.substring(0, 90);

  const handleFav = () => {
    if (category) {
      updateAdventure(_id, {
        title,
        description,
        image,
        date,
        category: ''
      }, 12, 1, 'fav')
      setAllFilter(false)
      setFavoritesFilter(true)
    } else {
      updateAdventure(_id, {
        title,
        description,
        image,
        date,
        category: 'fav'
      }, 12, 1, '')
    }
  }

  const handleFav2 = () => {
    if (category) {

      let goFav;

      if (confirm) {
        goFav = 'fav'
      } else {
        goFav = ''
      }

      updateAdventure(_id, {
        title,
        description,
        image,
        date,
        category: ''
      }, 15, 1, goFav)
      setAllFilter(false)
      setFavoritesFilter(true)
    } else {
      updateAdventure(_id, {
        title,
        description,
        image,
        date,
        category: 'fav'
      }, 15, 1, '')
    }
  }

  const { pathname } = useLocation()

  const renderMain = () => {
    if (pathname === '/adventures') {
      return (
        <div className='adventure rounded-md h-full' style={{ animationDelay: `${delay}ms` }}
          onClick={() => {
            window.scroll(0, 0);
            navigate(`/detail/${_id}`)
          }}>
          <div className='absolute top-2 left-2'>
            {category === 'fav' ? <MdFavorite className='text-red-600 cursor-pointer text-lg trash' onClick={(e) => {
              e.stopPropagation();
              handleFav()
            }} /> : <MdFavorite className='text-white cursor-pointer text-lg trash' onClick={(e) => {
              e.stopPropagation();
              handleFav()
            }} />}
          </div>
          <div className="adventure-icons absolute gap-5 flex right-2 top-2">
            <AiFillEdit className='text-white cursor-pointer edit' onClick={(e) => {
              e.stopPropagation();
              window.scroll(0, 50);
              navigate(`/new/${_id}`)
            }} />
            <FaTrashAlt className='text-white cursor-pointer trash' onClick={(e) => {
              e.stopPropagation();
              deleteAdventure(_id)
            }} />
          </div>

          {image && <img className='adv-img' src={image.url} alt={title} />}
          <div className="flex flex-col justify-between p-3 gap-3">
            <h3 className='text-gray-300 text-center'>{title}</h3>
          </div>
          <div className="adventure-middle px-3 pb-3">
            <p className='text-gray-500 '>{limitedDescription}...</p>
          </div>
          <div className='adventure-bottom'>
            <p className=''>{date}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className='adventure rounded-md h-full' style={{ animationDelay: `${delay}ms` }}
          onClick={() => {
            window.scroll(0, 0);
            navigate(`/detail/${_id}`)
          }}   >
          <div className='absolute top-2 left-2'>
            {category === 'fav' ? <MdFavorite className='text-red-600 cursor-pointer text-lg trash' onClick={(e) => {
              e.stopPropagation();
              handleFav2()
            }} /> : <MdFavorite className='text-white cursor-pointer text-lg trash' onClick={(e) => {
              e.stopPropagation();
              handleFav2()
            }} />}
          </div>
          <div className="adventure-icons absolute gap-5 flex right-2 top-2">
            <AiFillEdit className='text-white cursor-pointer edit' onClick={(e) => {
              e.stopPropagation();
              window.scroll(0, 50);
              navigate(`/new/${_id}`)
            }} />
            <FaTrashAlt className='text-white cursor-pointer trash' onClick={(e) => {
              e.stopPropagation();
              deleteAdventure(_id)
            }} />
          </div>

          {image && <img className='adv-img' src={image.url} alt={title} />}
          <div className="flex flex-col justify-between p-3 gap-3">
            <h3 className='text-gray-300 text-center'>{title}</h3>
          </div>
          <div className="adventure-middle px-3 pb-3">
            <p className='text-gray-500 '>{limitedDescription}...</p>
          </div>
          <div className='adventure-bottom'>
            <p className=''>{date}</p>
          </div>
        </div>
      )

    }
  }


  return (
    <>
      {renderMain()}
    </>
  )
}

export default Adventure;