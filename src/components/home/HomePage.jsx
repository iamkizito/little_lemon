import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import '../../assets/styles/homePage.css';





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
        <div id="home" data-testid="home_component">
            <HeroSection {...hero_props}/>
            <HighlightsSection/>
            <TestimonialsSection/>
            <AboutSection {...about_props}/>
        </div>
    )
}

export default HomePage;
