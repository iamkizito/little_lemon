import { Box, Flex, Image} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { colorPallete as cp } from "../../variables";
import { useState } from "react";


const Order = ({id, date, time, imageSrc, title, price, status}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Flex className="cart_item"
            padding="10px"
            cursor = "pointer"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            backgroundColor={isHovered ? cp.primary2 : ''}
        >
            <Flex className="item_details" flex={1}>
                <Box className="image" width={20} height={20} marginRight={5}>
                    <Image src={imageSrc} width="100%" height="100%" objectFit="cover"/>
                </Box>
                <Flex className="details" flex={1} direction="column" justify="space-between">
                    <Box className="date_time">{date} {time}</Box>
                    <Box className="title">{title}</Box>
                    <Box className="price">${price}</Box>        
                </Flex>
            </Flex>

            <Flex className="icon" flex={1} justify="flex-end" align="center">
                <Box marginRight="20px">{status}</Box>
                <FontAwesomeIcon icon={faChevronRight} />
            </Flex>
        </Flex>
    )
}

export default Order;