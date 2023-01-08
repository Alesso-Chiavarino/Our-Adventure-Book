import { useState, useEffect } from 'react';
import { useAdventure } from '../../context/AdventureContext';
import './Form.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { RiSendPlaneFill } from 'react-icons/ri'
import { ThreeDots } from 'react-loader-spinner'
import { RxUpdate } from 'react-icons/rx'
import { TbArrowBackUp } from 'react-icons/tb'
import { FaPlaneDeparture } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';

const Form = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)

  //categories state
  const [travel, setTravel] = useState(false)
  const [party, setParty] = useState(false)
  const [fav, setFav] = useState(false)
  const [home, setHome] = useState(false)
  const [category, setCategory] = useState('');

  const handleTravel = () => {
    if (travel) {
      setTravel(false)
      setCategory('')
    } else {
      setTravel(true)
      setCategory('travel')
    }
    setFav(false)
    setHome(false)
    setParty(false)
  }

  const handleParty = () => {
    if (party) {
      setParty(false)
      setCategory('')
    } else {
      setParty(true)
      setCategory('party')
    }
    setTravel(false)
    setFav(false)
    setHome(false)

  }

  const handleFav = () => {
    if (fav) {
      setFav(false)
      setCategory('')
    } else {
      setFav(true)
      setCategory('fav')
    }
    setTravel(false)
    setHome(false)
    setParty(false)

  }

  const handleHome = () => {
    if (home) {
      setHome(false)
      setCategory('')
    } else {
      setHome(true)
      setCategory('home')
    }
    setTravel(false)
    setFav(false)
    setParty(false)

  }

  const { createAdventure, getAdventure, updateAdventure } = useAdventure()

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      await updateAdventure(params.id, {
        title,
        description,
        date,
        category,
        image
      })
      navigate(-1)
      return;
    }

    await createAdventure({
      title,
      description,
      date,
      category,
      image
    });
    setTitle('');
    setDescription('');
    setDate('');
    setCategory('');
    navigate(-1)
  }

  const params = useParams();

  useEffect(() => {
    const editHandler = async () => {
      if (params.id) {
        const res = await getAdventure(params.id);
        setTitle(res.title);
        setDescription(res.description);
        setDate(res.date);
        // console.log(res.category)
        setCategory(res.category);
      }
    }
    editHandler();
  }, [getAdventure, params.id])

  const navigate = useNavigate();

  const handleArea = () => {
    if (params.id) {
      return handleButtons2()
    }
    return handleButtons()
  }

  const handleButtons = () => {
    if (isSubmit) {
      return (
        <button type="submit">Submiting
          <ThreeDots
            height="20"
            width="30"
            radius="9"
            color="#02f0ac"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </button>
      )
    } else {
      return (
        <button type="submit" onClick={() => setIsSubmit(true)} ><RiSendPlaneFill /> Submit</button>
      )
    }
  }

  const handleButtons2 = () => {

    if (isSubmit) {
      return (
        <button type="submit">Updating
          <ThreeDots
            height="20"
            width="30"
            radius="9"
            color="#02f0ac"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </button>
      )
    } else {
      return (
        <button type="submit" onClick={() => setIsSubmit(true)} ><RxUpdate /> Update</button>
      )
    }
  }



  return (
    <section className='form-container'>
      {params.id ? <h1 className='form-title'>Edit Adventure</h1> : <h1 className='form-title'>Create Adventure</h1>}

      <div className='card-container'>
        <TbArrowBackUp className='go-back-icon' onClick={() => navigate(-1)} />
        <span className='text-white go-back-icon'>  </span>
        <article className='card'>
          <form onSubmit={handleSubmit}>
            {params.id ? <h1>Edit an adventure</h1> : <h1>Create an adventure</h1>}
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input type="text" className="form-control" id="name" value={title} placeholder='Type a title...' onChange={handleTitle} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Description</label>
              <textarea className="form-control" id="message" value={description} placeholder='Type a description...' rows="3" onChange={handleDescription} ></textarea>
            </div>


            <div className='flex w-full'>

              <div className='form-left'>
                <div className="form-group date-form">
                  <label htmlFor="name">Date</label>
                  <input type="text" className="form-control" id="name" value={date} placeholder='Type a date...' onChange={handleDate} />
                </div>

                <div className='w-full'>
                  <label htmlFor="image" className='label-img'>Image</label>
                  <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" files={image} onChange={(e) => {
                    console.log(e.target.files[0])
                    setImage(e.target.files[0]);
                  }} type="file"></input>
                </div>
              </div>

              <div className='flex flex-col w-1/2 pl-10'>
                <span className='text-white mb-2'>Category</span>
                <div className='flex flex-wrap'>
                  <div className="categories-container flex gap-5">
                    {category === 'travel' ? <FaPlaneDeparture className='text-white category-form-active' onClick={handleTravel} /> : <FaPlaneDeparture className='text-gray-400 category-form' onClick={handleTravel} />}
                    {category === 'party' ? <FaBeer className='text-white category-form-active' onClick={handleParty} /> : <FaBeer className='text-gray-400 category-form' onClick={handleParty} />}
                    {category === 'fav' ? <MdFavorite className='text-white category-form-active' onClick={handleFav} /> : <MdFavorite className='text-gray-400 category-form' onClick={handleFav} />}
                    {category === 'home' ? <AiFillHome className='text-white category-form-active' onClick={handleHome} /> : <AiFillHome className='text-gray-400 category-form' onClick={handleHome} />}
                  </div>
                </div>
              </div>

            </div>

            {handleArea()}
          </form>
        </article>
      </div>
    </section>
  )
}

export default Form;