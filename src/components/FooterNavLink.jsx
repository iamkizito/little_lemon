import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FooterNavLink = ({to, children, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Box as={Link}
            to={to}
            bg={isHovered? 'lightgrey': ''}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {children}
        </Box>
    )
}


export default FooterNavLink;