import './AdventureModal.scss';
import { useAdventure } from '../../context/AdventureContext';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { FaPlaneDeparture } from 'react-icons/fa';
import { MdFavorite, MdImageNotSupported } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
import { TbArrowBackUp } from 'react-icons/tb'
import { BiLinkAlt } from 'react-icons/bi'

const AdventureModal = () => {


    const { getAdventure } = useAdventure();
    const { id } = useParams()
    const [adventure, setAdventure] = useState({})

    useEffect(() => {
        const handleAdventure = async () => {
            const res = await getAdventure(id)
            setAdventure(res);
        }
        handleAdventure()
    }, [])

    const handleCategory = () => {
        if (adventure.category === 'fav') {
            return <MdFavorite className='text-white category-form-active' />
        }
        if (adventure.category === 'travel') {
            return <FaPlaneDeparture className='text-white category-form-active' />
        }
        if (adventure.category === 'home') {
            return <AiFillHome className='text-white category-form-active' />
        }
        if (adventure.category === 'party') {
            return <FaBeer className='text-white category-form-active' />
        }
        if (adventure.category === '') {
            return <MdImageNotSupported className='text-white category-form-active' />
        }
    }

    const navigate = useNavigate();

    return (
        <section className='detail'>
            <article className='container mx-auto flex flex-col pt-5'>
                <h1 className='adv-detail-title'>Our Adventure</h1>
                <div className='adv-detail-father'>
                    <div className='adv-detail bg-white relative' >
                        <div className='absolute top-3 right-4 flex gap-3 items-center'>
                            <a href={adventure.image?.url} target='_blank' rel='noreferrer' > <BiLinkAlt className='icon' /> </a>
                            <TbArrowBackUp className='icon2' onClick={() => navigate(-1)} />
                        </div>
                        <div className="img-modal-adv-detail">
                            <img src={adventure.image?.url} alt={adventure.title} />
                        </div>
                        <div className="modal-content-adv-detail flex flex-col justify-between">
                            <h3>{adventure.title}</h3>
                            <hr className='my-5' />
                            <p className='description'>{adventure.description}</p>
                            <hr className='my-5' />
                            <div className="bottom-side flex justify-between">
                                <div className="date flex items-center gap-2 text-gray-400">
                                    <BsFillCalendarDateFill className='mb-1' /><span>{adventure.date}</span>
                                </div>
                                <span className="date flex items-center gap-2 text-gray-400">Category:{handleCategory()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default AdventureModal;
