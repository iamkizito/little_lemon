import { useEffect } from "react";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import '../../assets/styles/homePage.css';
import Main from "../Main";





const HomePage = ({setActive}) => {
    const hero_props = {
        title: 'Little Lemon',
        location: 'Canada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam sunt non pariatur voluptatum repellat quos obcaecati?',
        imageSrc: require("../../assets/images/restauranfood.jpg")
    }
    
    const about_props = {
        ...hero_props,
        imageSrc1: require("../../assets/images/restauranfood.jpg"),
        imageSrc2: require("../../assets/images/restauranfood.jpg"),
    }
    

    useEffect(() => {
        setActive('home')
    }, [])

    return (
        <Main id="home_page" data-testid="home_page_component">
            <HeroSection {...hero_props}/>
            <HighlightsSection/>
            <TestimonialsSection/>
            <AboutSection about_props={about_props} display={{base:"none !important", md:"block !important"}}/>
        </Main>
    )
}

export default HomePage;


