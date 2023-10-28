import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { colorPallete as cp } from "../variables";

const TopNavLink = ({to, children, isActive, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    const getStyle = () => {
        if (isActive) {
            return {
                borderBottom: `3px solid ${cp.primary2}`
            }
        }
        if (isHovered) {
            return {
                color: cp.primary2
            }
        }
    }

    return (
        <Box as={Link}
            to={to}
            style={getStyle()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {children}
        </Box>
    )
}


export default TopNavLink;