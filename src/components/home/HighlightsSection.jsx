import { useEffect, useState } from "react";
import { Skeleton } from '@chakra-ui/react';
import paths from "../../paths";
import { Link } from 'react-router-dom';
import MealCard from "../menu/MealCard";
import SectionContainer from "../SectionContainer";
import ActionButton from "./ActionButton";
import { Flex, Box, Image } from "@chakra-ui/react";
import { colorPallete as cp, maxWidth } from "../../variables";

const highlights_data_sample = [
    {
        id: 1,
        imageSrc: require("../../assets/images/greek salad.jpg"),
        title: "Greek sald",
        price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id: 2,
        imageSrc: require("../../assets/images/bsd.png"),
        title: "Bruchetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        id: 3,
        imageSrc: require("../../assets/images/lemon dessert.jpg"),
        title: "Lemon Dessert",
        price: "5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
]



const HighlightsSection = ({setActive}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getHighlights = () => {
            setLoading(true)
            setTimeout(() => {
                setData(highlights_data_sample)
                setLoading(false)
            }, 1000)
        }

        getHighlights()
    }, [])

    return (
        <Flex as="section" id="highlights" data-testid="highlights_component"
            minHeight="750px"
            justify="center"
        >
            <SectionContainer className="container"
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Flex className="heading" justify="space-between" marginBottom="20px">
                    <Box as="h1" fontSize={{base:"", md:"2rem"}} fontWeight="bold" color="black">Today's Specials</Box>
                    <ActionButton to={paths.menu} role="button" data-testid="goto_menu"
                        width="200px" 
                        maxWidth={{base:"150px", md:"250px"}} 
                        fontSize={{base:"0.9rem", md:"1rem"}}
                    >
                        Online Menu
                    </ActionButton>
                </Flex>
                <Flex className="cards" gap="40px" flexDirection={{base:"column", md:"row"}}>
                    {loading && (
                        <>
                            <Skeleton flex={1} height={300}/>
                            <Skeleton flex={1} height={300}/>
                            <Skeleton flex={1} height={300}/>
                        </>
                    )}
                    {!loading && data && data.map((special, index) => {
                        return (
                            <MealCard color="black"
                                key={special.id}
                                id={special.id}
                                imageSrc={special.imageSrc}
                                title={special.title}
                                description={special.description}
                                price={special.price}
                            />
                        )
                    })}
                </Flex>
            </SectionContainer>
        </Flex>
    )
}


export default HighlightsSection;