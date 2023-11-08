import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { colorPallete as cp } from "../../variables";
import { useCartContext } from "../../contexts/useCartContext";
import { Box } from "@chakra-ui/react";


const CartButton = ({...props}) => {

    const [isHovered, setIsHovered] = useState(false);
    const {cart} = useCartContext()

    const totalInCart = () => {
        let count = 0
        cart.forEach((item, index) => {
            count += item.count
        })
        return count
    }

    return (
        <Box className="cart_trigger" {...props}>
            <Box className="cart" 
                position="relative" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                color={isHovered ? cp.primary2 : cp.primary1}
            >
                <Box className="count" color={cp.primary2} fontSize="1rem" position="absolute" left="28px" top="-15px">
                    {totalInCart()}
                </Box>
                <Box className="icon" width="30px" height="30px">
                    <FontAwesomeIcon style={{width:"100%", height:"100%"}} icon={faCartShopping}/>
                </Box>
            </Box>
        </Box>
    )   
}

export default CartButton;