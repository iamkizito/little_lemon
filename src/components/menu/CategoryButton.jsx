import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { colorPallete as cp } from "../../variables";

const CategoryButton = ({categoryName, activeCategory, setCategory, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    const getStyle = () => {
        const style = {
            minWidth: "100px",
            color: "black",
            fontWeight: "bold",
            padding: "10px",
            textAlign: "center",
        }

        if (activeCategory == categoryName) {
            return {
                ...style,
                backgroundColor: cp.primary2,
            }
        } else if (isHovered) {
            return {
                ...style,
                backgroundColor: "lightgrey",
            }
        } else {
            return {...style}
        }
    }

    return (
        <Box 
            style={getStyle()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
            onClick={() => setCategory(categoryName)}
            cursor="pointer"
            {...props}
        >
            {categoryName}
        </Box>
    )
}


export default CategoryButton;