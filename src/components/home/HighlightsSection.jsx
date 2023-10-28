import { useEffect, useState } from "react";
import { Skeleton } from '@chakra-ui/react';
import paths from "../../paths";
import { Link } from 'react-router-dom';
import HighlightCard from "./HighlightCard";
import SectionContainer from "../SectionContainer";

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
        <section id="highlights" data-testid="highlights_component">
            <SectionContainer className="wrapper">
                <div className="heading">
                    <h1>Specials</h1>
                    <Link to={paths.menu} role="button" className="button" data-testid="goto_menu">Online Menu</Link>
                </div>
                <div className="cards">
                    {loading && (
                        <>
                            <Skeleton flex={1} height={300}/>
                            <Skeleton flex={1} height={300}/>
                            <Skeleton flex={1} height={300}/>
                        </>
                    )}
                    {!loading && data && data.map((special, index) => {
                        return (
                            <HighlightCard 
                                key={special.id}
                                id={special.id}
                                imageSrc={special.imageSrc}
                                title={special.title}
                                description={special.description}
                                price={special.price}
                            />
                        )
                    })}
                </div>
            </SectionContainer>
        </section>
    )
}


export default HighlightsSection;