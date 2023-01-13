import './LetterDetail.scss';
import { useEffect, useState } from 'react';
import { useLetter } from '../../context/LetterContext';
import { useParams } from 'react-router-dom';

const LetterDetail = () => {

    const { getLetter } = useLetter();
    const [letter, setLetter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const loadLetter = async () => {
            const letter = await getLetter(id);
            setLetter(letter)
        }
        loadLetter();
    }, [])

    return (
        <section className='letter-detail-section'>
            <main className='container mx-auto flex flex-col items-center'>
                <h1>Our Letter</h1>
                <div className='letter-detail-container'>
                    <article className='letter-detail'>
                        <div className='flex justify-between items-center'>
                            <h3>{letter.data?.title}</h3>
                            <span>{letter.data?.date}</span>
                        </div>
                        <hr className='mb-3' />
                        <p>{letter.data?.description}</p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default LetterDetail;