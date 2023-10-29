import { useCartContext } from "../../contexts/useCartContext";
import { faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Box, Image } from "@chakra-ui/react";
import { colorPallete as cp } from "../../variables";


const MealCard = ({id, imageSrc, title, description, price, ...props}) => {
    const {cart, add} = useCartContext()

    const handleAddToCart = () => {
        add({
            id: id,
            imageSrc: imageSrc,
            title: title,
            price: price,
        })
    }

    return (
        <Box className="meal_card" data-testid="meal_card_component"
            flex={1}
            borderRadius="20px 20px 0 0"
            bg={cp.highlight1}
            {...props}
        >
            <Image width="100%" height="250px" objectFit="cover" src={imageSrc} alt={`${title} image`} />
            <Flex className="content" direction="column" minHeight="200px" padding="20px">            
                <Flex className="heading" justify="space-between" fontWeight="bold">
                    <Box className="title" color="black">{title}</Box>
                    <Box className="price" color={cp.secondary1}>${price}</Box>
                </Flex>
                <Box className="description" flex={1} fontSize="0.8rem"  marginBottom="20px">{description}</Box>
                <Flex className="add_to_cart" fontSize="0.8rem" fontWeight="bold" cursor="pointer" onClick={handleAddToCart}>
                    <FontAwesomeIcon style={{width:"20px", height:"20px", marginRight:"5px"}} icon={faCartPlus}/>
                    <Box className="text">Add to cart</Box>      
                </Flex>
            </Flex>
        </Box>
    )
}

export default MealCard;



