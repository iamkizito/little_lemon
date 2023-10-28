import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { colorPallete as cp } from "../variables";

const NavItem = ({to, children, activeNav, navName, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    const getStyle = () => {
        if (activeNav == navName) {
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
        <Link 
            to={to}
            style={getStyle()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </Link>
    )
}


export default NavItem;