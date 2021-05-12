import SquareCard from '../SquareCard';
import './GallerySquare.css'

function GallerySquare() {
    return (
        <div className="gallery-square">
            <SquareCard />
            <SquareCard />
            <SquareCard />
        </div>
    )
}

export default GallerySquare;