import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

const RotatingCube = () => {

    return (
        <Flex id="bouncing" justify="center" align="center">
            <Flex className="scene" perspective="10px">
                <Cube size="100px"/>
            </Flex>  
        </Flex>
    )
}


const Cube = ({size}) => {
    const [isHovered, setIsHovered] = useState(false)

    const rotation = `
        @keyframes rotation {
            0% {
                transform: rotateX(0deg) rotateY(0deg);
            }
            100% {
                transform: rotateX(360deg) rotateY(360deg);
            }
        }
    `
    const halfSize = parseInt(size.split('px')[0]) / 2
    
    return (
        <Box id="cube"
            position="relative"
            width={size}
            height={size}
            transform="rotateX(20deg) rotateY(30deg)"
            style={{transformStyle: 'preserve-3d'}}
            animation={isHovered ? '' : "rotation 15s infinite linear"}
            css={rotation}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Face size={size} className="front" transform={`translateZ(${halfSize}px)`}></Face>
            <Face size={size} className="back" transform={`translateZ(-${halfSize}px) rotateY(180deg)`}></Face>
            <Face size={size} className="left" transform={`translateX(-${halfSize}px) rotateY(-90deg)`}></Face>
            <Face size={size} className="right" transform={`translateX(${halfSize}px) rotateY(90deg)`}></Face>
            <Face size={size} className="top" transform={`translateY(-${halfSize}px) rotateX(90deg)`}></Face>
            <Face size={size} className="bottom" transform={`translateY(${halfSize}px) rotateX(-90deg)`}></Face>
        </Box>
    )
}

const Face = ({size, ...props}) => {

    return (
        <Box className="face"
            position="absolute"
            width={size}
            height={size}
            border="1px solid blue"
            borderRadius="8px"
            opacity="0.8"
            bg="lightblue"
            {...props}
        >

        </Box>
    )
}

export default RotatingCube;