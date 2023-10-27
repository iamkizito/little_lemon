import { useCartContext } from "../../contexts/useCartContext";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MealCard = ({id, imageSrc, title, description, price}) => {
    const {cart, addToCart} = useCartContext()

    const handleAddToCart = () => {
        addToCart({
            id: id,
            title: title,
            price: price,
        })
    }

    return (
        <div className="meal_card" data-testid="meal_card_component">
            <div className="image">
                <img src={imageSrc} alt={`${title} image`} />
            </div>
            <div className="content">            
                <div className="heading">
                    <div className="title">{title}</div>
                    <div className="price">{price}</div>
                </div>
                <div className="description">{description}</div>
                <div className="add_to_cart" onClick={handleAddToCart}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faCartPlus}/>
                    </div>
                    <div className="text">Add to cart</div>      
                </div>
            </div>
        </div>
    )
}

export default MealCard;



