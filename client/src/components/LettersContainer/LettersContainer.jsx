import { useLetter } from '../../context/LetterContext';
import Letter from '../Letter/Letter';
import './LettersContainer.scss';
import { useEffect, useState } from 'react';

const LettersContainer = () => {

    const { getLetters, letters } = useLetter();

    useEffect(() => {
        getLetters();
    }, [])


    return (
        <section className='letters-container-section'>
            <main className='container mx-auto flex items-center flex-col'>
                <h1>Our Letters</h1>
                <div className='grid grid-cols-3 gap-10'>
                    {letters.docs?.map(lett => <Letter key={lett._id} id={lett._id} {...lett} />)}
                </div>
            </main>
        </section>
    )
}

export default LettersContainer;