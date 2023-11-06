import { Flex, Box } from "@chakra-ui/react";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const CategoryScrollXButton = ({direction, elementRef}) => {

    console.log(elementRef)
    console.log(direction)

    const isLeft = direction === "left"

    const ScrollForward = () => {
        elementRef.current.scroll({
            left: elementRef.current.scrollLeft + 100,
            behavior: "smooth"
        })
    };

    const ScrollBackward = () => {
        elementRef.current.scroll({
            left: elementRef.current.scrollLeft - 100,
            behavior: "smooth"
        })
    };

    return (
        <Box
            display={{base:"flex", md:"none"}}
            position="absolute"
            top="50%"
            transform = "translateY(-50%)"
            width="30px"
            height="50px"
            left={isLeft? '0px' : ''}
            right={isLeft? '' : '0px'}
            bg="white"
            opacity="0.05"
            justifyContent="center"
            boxShadow="0 0 3px 3px black"
        >
            <FontAwesomeIcon icon={isLeft? faChevronLeft : faChevronRight}
                style = {{width:"20px", height:"100%"}}
                onClick={isLeft? ScrollBackward : ScrollForward}
            />
        </Box>
    )

}

export default CategoryScrollXButton