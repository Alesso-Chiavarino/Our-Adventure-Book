import './Adventures.scss';
import { FaPlaneDeparture } from 'react-icons/fa';
import { MdFavorite, MdPhotoLibrary } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
import { useAdventure } from '../../context/AdventureContext';
import Adventure from '../../components/Adventure/Adventure';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { useEffect, useState, useRef } from 'react';
import { useSearch } from '../../context/SearchContext';
import { useParams } from 'react-router-dom';

const Adventures = () => {

    const { adventures, data, getLimitedAdventures, confirm, handleConfirm } = useAdventure();
    const [page, setPage] = useState(1)
    const previusRef = useRef(null);
    const nextRef = useRef(null);

    const [allFilter, setAllFilter] = useState(true);
    const [travelFilter, setTravelFilter] = useState(false);
    const [favoritesFilter, setFavoritesFilter] = useState(false);
    const [homeFilter, setHomeFilter] = useState(false);
    const [partyFilter, setPartyFilter] = useState(false);

    const handleAllFilter = () => {
        setAllFilter(true)
        setTravelFilter(false)
        setFavoritesFilter(false)
        setHomeFilter(false)
        setPartyFilter(false)
        setPage(1);
        getLimitedAdventures(12, 1, '')
    }

    const handlePartyFilter = () => {
        setPartyFilter(true)
        setTravelFilter(false)
        setFavoritesFilter(false)
        setHomeFilter(false)
        setAllFilter(false)
        getLimitedAdventures(12, 1, 'party')
    }

    const handleTravelFilter = () => {
        setTravelFilter(true)
        setFavoritesFilter(false)
        setHomeFilter(false)
        setPartyFilter(false)
        setAllFilter(false)
        getLimitedAdventures(12, 1, 'travel')
    }

    const handleFavoritesFilter = () => {
        setFavoritesFilter(true)
        setTravelFilter(false)
        setHomeFilter(false)
        setPartyFilter(false)
        setAllFilter(false)
        getLimitedAdventures(12, 1, 'fav')
    }

    const handleHomeFilter = () => {
        setHomeFilter(true)
        setTravelFilter(false)
        setFavoritesFilter(false)
        setPartyFilter(false)
        setAllFilter(false)
        getLimitedAdventures(12, 1, 'home')
    }

    const { search } = useSearch();

    useEffect(() => {
        getLimitedAdventures(12, page, search);
    }, [page, search])

    const handleNextPage = () => {
        if (data.hasNextPage) {
            setPage(page + 1)
        }
    }

    const handlePreviusPage = () => {
        if (data.hasPrevPage) {
            setPage(page - 1)
        }
    }

    const { fav } = useParams();



    const conectToChild = (data) => {
        console.log(data)
    }

    useEffect(() => {
        if (fav) {
            handleFavoritesFilter()
            if (allFilter) {
                handleConfirm(true);
                handleFavoritesFilter()
            } else {
                handleConfirm(false);
            }
        }
    }, [fav])

    return (
        <section className='adventures-section min-h-screen'>
            <main className='container mx-auto'>
                <div className='grid grid-cols-12 pt-1'>
                    <aside className="adv-left col-span-12 md:col-span-3 h-fit md:sticky top-0 ">
                        <span className='flex text-white font-extrabold text-lg py-2 px-2'>Adventures ({adventures.length})</span>
                        <div className='flex flex-col gap-1'>

                            {!allFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md' onClick={handleAllFilter} >
                                <MdPhotoLibrary className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>All</span>
                            </div> : <div className=' bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md' onClick={handleAllFilter} >
                                <MdPhotoLibrary className=' text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>All</span>
                            </div>}

                            {!travelFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md' onClick={handleTravelFilter} >
                                <FaPlaneDeparture className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Travel</span>
                            </div> : <div className=' bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md' onClick={handleTravelFilter} >
                                <FaPlaneDeparture className=' text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Travel</span>
                            </div>}

                            {!favoritesFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handleFavoritesFilter} >
                                <MdFavorite className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Favorites</span>
                            </div> : <div className='bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handleFavoritesFilter} >
                                <MdFavorite className='text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Favorites</span>
                            </div>}

                            {!homeFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handleHomeFilter} >
                                <AiFillHome className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Home</span>
                            </div> : <div className='bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handleHomeFilter} >
                                <AiFillHome className='text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Home</span>
                            </div>}

                            {!partyFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handlePartyFilter} >
                                <FaBeer className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Party</span>
                            </div> : <div className='bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handlePartyFilter} >
                                <FaBeer className='text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Party</span>
                            </div>}
                        </div>
                    </aside>
                    <div className="adv-right col-span-12 md:col-span-9 pt-1 px-2 md:px-3 ">
                        <div className='flex justify-between mb-5'>
                            {data.hasPrevPage ?
                                <span className='flex  btn-pagination text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handlePreviusPage} ref={previusRef} ><RxDoubleArrowLeft className='text-white' />Previus</span>
                                :
                                <span className='flex  bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handlePreviusPage} ref={previusRef} ><RxDoubleArrowLeft className='text-white' />Previus</span>
                            }

                            {data.hasNextPage ?
                                <span className='flex btn-pagination text-white rounded-md justify-center items-center gap-1 text-sm px-2 py-1 cursor-pointer' onClick={handleNextPage} ref={nextRef}  >Next<RxDoubleArrowRight className='text-white' /></span>
                                :
                                <span className='flex  bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handleNextPage} ref={nextRef}  >Next<RxDoubleArrowRight className='text-white' /></span>}
                        </div>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 gap-y-4 md:gap-y-0 md:gap-3"'>
                            {adventures.map((adv, i) => <Adventure setAllFilter={setAllFilter} conectToChild={conectToChild} confirm={confirm} setFavoritesFilter={setFavoritesFilter} {...adv} id={i} key={adv._id} />)}
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Adventures;