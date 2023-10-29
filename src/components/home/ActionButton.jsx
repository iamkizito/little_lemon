import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colorPallete as cp } from "../../variables";

const ActionButton = ({to, children, ...props}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box as={Link} to={to}
            display="block"
            bg={isHovered? "#f4ce148a" : cp.primary2}
            textAlign="center"
            padding="10px"
            fontWeight="bold"
            borderRadius="16px"
            color="black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {children}
        </Box>
    )
}

export default ActionButton;