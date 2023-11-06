import paths from "../../paths";
import SectionContainer from "../SectionContainer";
import { Flex, Box, Image } from "@chakra-ui/react";
import { colorPallete as cp } from "../../variables";
import ActionButton from "./ActionButton";


const HeroSection = ({title, location, description, imageSrc}) => {

    return (
        <Flex as="section" id="hero_section" data-testid="hero_component"
            height="400px"
            justify="center"
            bg={cp.primary1}
        >
            <SectionContainer className="container"
                flex={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="10px"
            >
                <Box className="content" flex={1} maxWidth="400px" color="white">
                    <Box as="h1" fontSize={{base:"1.6rem", md:"3rem"}} fontWeight="bold" color={cp.primary2}>
                        {title}
                    </Box>
                    <Box as="p" className="location" marginBottom="10px" fontSize={{base:"1.2rem", md:"2rem"}}>{location}</Box>
                    <Box as="p" className="description" marginBottom="10px" fontSize={{base:"0.8rem", md:"1rem"}}>{description}</Box>
                    <ActionButton to={paths.reservation} data-testid="goto_reservation"
                        maxWidth={{base:"150px", md:"250px"}} 
                        fontSize={{base:"0.9rem", md:"1rem"}} 
                        marginTop="20px"
                    >
                        Reserve a Table
                    </ActionButton>
                </Box>
                <Box className="image"
                    width={{base:"180px", md:"400px"}} 
                    height={{base:"180px", md:"100%"}}
                >
                    <Image src={imageSrc}  alt="title image" 
                        width="100%" 
                        height="100%"  
                        objectFit="cover" 
                        borderRadius="16px" 
                        position={{base: "", md:"relative"}}
                        top="73px"
                    /> 
                </Box>
            </SectionContainer>
        </Flex>
    )
}


export default HeroSection;




