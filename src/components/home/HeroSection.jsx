import paths from "../../paths";
import { Link } from 'react-router-dom';
import SectionContainer from "../SectionContainer";


const HeroSection = ({title, location, description, imageSrc}) => {

    return (
        <section id="hero" data-testid="hero_component">
            <SectionContainer className="wrapper">
                <div className="content">
                    <h1>{title}</h1>
                    <p className="location">{location}</p>
                    <p className="description">{description}</p>
                    <Link to={paths.reservation} role="button" className="button" data-testid="goto_reservation">Reserve a Table</Link>
                </div>
                <div className="image">
                    <img src={imageSrc} alt="title image" /> 
                </div>
            </SectionContainer>
        </section>
    )
}


export default HeroSection;