import '../styles/components/Stars.css'
import Star from '../assets/Star.svg'
import EmptyStar from '../assets/EmptyStar.svg'

function StarRating({rating}) {
    const stars = [1, 2, 3, 4, 5]

    const title = 'Star'
    const titleEmpty = 'Empty star'

    return (
        <div className="LocationStars">
            {stars.map((star) => rating >= star ?  
            <div className="LocationStar" key={star}>
                <img src={ Star } alt={ title } />
            </div> : 
            <div className="LocationStar" key={star}>
                <img src={ EmptyStar } alt={ titleEmpty } />
            </div>
            )}       
        </div>
    )
}

export default StarRating