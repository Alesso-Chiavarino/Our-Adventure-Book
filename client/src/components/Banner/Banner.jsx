import './Banner.scss';
import TypeWriter from '../TypeWriter/TypeWriter';
import { GrMail } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'
import { IoIosAlbums } from 'react-icons/io'
import { FaListAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner container flex justify-between my-20'>
            <div className='grid lg:grid-cols-2 gap-10 py-3 md:mt-10'>
                <div className='flex flex-col banner-left'>
                    <h1 className='animate__animated  animate__fadeInLeft banner-title text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-500'>Our Adventure Book</h1>
                    <span className='type-writer my-4'><TypeWriter /></span>
                    <p className=' animate__animated  animate__fadeInLeft text-gray-200' style={{ animationDelay: "0.5s" }}>Welcome to <b>Our Adventure Book</b>, it is a page where we can save the most special moments that will we have, and those that we don't too :)</p>
                    <p className=' animate__animated mt-5 animate__fadeInLeft text-gray-300' style={{ animationDelay: "1s" }}>And it's a gift for the 3 years we have been a couple. I hope you enjoy it as much as I enjoyed doing it. With love, your boy &lt;3.</p>
                </div>
                <div className='grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-4"'>

                    <Link to='/letters'>
                        <div className="banner-card letters animate__animated animate__flipInY animate__faster" style={{ animationDelay: "100ms" }}>
                            <GrMail className='h-30 w-30 lg:h-16 lg:w-16' />
                        </div>
                    </Link>

                    <Link to='/tasks'>
                        <div className="banner-card list animate__animated animate__flipInY animate__faster " style={{ animationDelay: "400ms" }}>
                            <FaListAlt className='h-30 w-30 lg:h-16 lg:w-16' />
                        </div>
                    </Link>

                    <Link to='/adventures'>
                        <div className="banner-card album animate__animated animate__flipInY animate__faster " style={{ animationDelay: "700ms" }}>
                            <IoIosAlbums className='h-30 w-30 lg:h-16 lg:w-16 text-white' />
                        </div>
                    </Link>

                    <a href='https://open.spotify.com/playlist/086RjPNbhLfSCBprflmpEa?si=da1497741d374b0b' rel="noreferrer" target='_blank'>
                        <div className="banner-card spotify animate__animated animate__flipInY animate__faster " style={{ animationDelay: "1000ms" }}>
                            <img src="./img/spotify.webp" className='  h-30 w-30 lg:h-16 lg:w-16' alt="" />
                        </div>
                    </a>

                    <a href='https://www.tiktok.com/@user6195661253900' rel="noreferrer" target='_blank'>
                        <div className="banner-card tiktok animate__animated animate__flipInY animate__faster " style={{ animationDelay: "1300ms" }}>
                            <img src="./img/tiktok.svg" className='h-30 w-30 lg:h-16 lg:w-16' alt="" />
                        </div>
                    </a>

                    <Link to='/adventures/favorites'>
                        <div className="banner-card favs animate__animated animate__flipInY animate__faster " style={{ animationDelay: "1600ms" }}>
                            <MdFavorite className='h-30 w-30 lg:h-16 lg:w-16' />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Banner;