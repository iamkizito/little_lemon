import SectionContainer from "../SectionContainer";

const AboutSection = ({title, location, description, imageSrc1, imageSrc2}) => {
    return (
        <section id="about" data-testid="about_component">
            <SectionContainer className="wrapper">
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="location">{location}</div>
                    <div className="description">{description}</div>
                </div>
                <div className="images">
                    <div className="image image1">
                        <img src={imageSrc1} alt="owner's image1" />
                    </div>
                    <div className="image image2">
                        <img src={imageSrc2} alt="owner's image2" />
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default AboutSection;