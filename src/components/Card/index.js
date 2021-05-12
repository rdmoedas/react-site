import image from './200x300.png';
import './Card.css'

function Card() {
    return (
        <div className="card">
            <img src={image} alt="card"/>
        </div>
    )
}

export default Card;