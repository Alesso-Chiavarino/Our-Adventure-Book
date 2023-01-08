import './Brand.scss';
import { GiWhiteBook } from 'react-icons/gi'

const Brand = () => {
  return (
    <div className='flex gap-0.5 items-center'>
      <GiWhiteBook className='text-white rotate-30 mb-1 book'/>
      <h1 className='lol'>Our</h1>
      <h1 className='lol2'>Adventure</h1>
      <h1 className='lol'>Book</h1>
    </div>
  )
}

export default Brand;