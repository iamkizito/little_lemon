import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const TestimonialCard = ({name, imageSrc, rating, review}) => {
    const maxStar = 5

    return (
        <div className="testimonial" data-testid="testimonial_component">
            <div className="rating">
                {Array.from({length: maxStar}, (_, index) => {
                    let starred = index < rating
                    return (
                        <FontAwesomeIcon key={index} icon={faStar}  className={starred ? 'starred' : ''}/>
                    ) 
                })}
            </div>
            <div className="customer">
                <div className="image">
                    <img src={imageSrc} alt="customer image" />
                </div>
                <div className="name">{name}</div>
            </div>
            <div className="review">{review}</div>
        </div>
    )
}

export default TestimonialCard;

