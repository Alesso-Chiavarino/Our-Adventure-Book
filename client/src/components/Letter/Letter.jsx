import './Letter.scss';
import { Link } from 'react-router-dom';

const Letter = ({ title, id }) => {
    return (
        <Link to={`/letters/detail/${id}`}>
            <article className='letter-container'>
                <h3>{title}</h3>
                <div className='letter'>
                </div>
            </article>
        </Link>
    )
}

export default Letter;