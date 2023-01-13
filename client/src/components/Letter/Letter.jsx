import './Letter.scss';

const Letter = ({title}) => {
    return (
        <article className='letter-container'>
            <h3>{title}</h3>
            <div className=' letter'>
            </div>
        </article>
    )
}

export default Letter;