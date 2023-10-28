import { Box, Flex, Image} from "@chakra-ui/react";
import { useCartContext } from "../../contexts/useCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";


const CartItem = ({item}) => {
    const {cart, add, remove} = useCartContext();

    return (
        <Flex className="cart_item">
            <Flex className="item_details" flex={1}>
                <Box className="image" width={20} height={20} marginRight={5}>
                    <Image src={item.imageSrc} width="100%" height="100%" objectFit="cover"/>
                </Box>
                <Box className="details" flex={1}>
                    <Box className="title">{item.title}</Box>
                    <Box className="price">${item.price}</Box>
                    <Box className="remove">
                        <FontAwesomeIcon icon={faTrashCan} /> Remove
                    </Box>         
                </Box>
            </Flex>
            <Flex className="quantity" gap={3} flex={1} justify="center" align="center">
                <Box as="button" className="decrease" width={9} height={9} onClick={() => remove(item)}>
                    <FontAwesomeIcon style={{width: "100%", height: "100%"}} icon={faCircleMinus}/>
                </Box>
                <Box className="count" width={10} textAlign="center">{item.count}</Box>
                <Box as="button" className="increase" width={9} height={9} onClick={() => add(item)}>
                    <FontAwesomeIcon style={{width: "100%", height: "100%"}} icon={faCirclePlus}/>
                </Box>   
            </Flex>
            <Flex className="subtotal" flex={1} justify="flex-end" align="center">
                ${item.price * item.count}
            </Flex>
        </Flex>
    )
}

export default CartItem;