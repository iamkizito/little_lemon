import SectionContainer from "../SectionContainer";
import { Box } from "@chakra-ui/react";

const AboutSection = ({about_props, ...other_props}) => {
    return (
        <Box as="section" id="about" data-testid="about_component" {...other_props}>
            <SectionContainer className="wrapper">
                <div className="content">
                    <div className="title">{about_props.title}</div>
                    <div className="location">{about_props.location}</div>
                    <div className="description">{about_props.description}</div>
                </div>
                <div className="images">
                    <div className="image image1">
                        <img src={about_props.imageSrc1} alt="owner's image1" />
                    </div>
                    <div className="image image2">
                        <img src={about_props.imageSrc2} alt="owner's image2" />
                    </div>
                </div>
            </SectionContainer>
        </Box>
    )
}

export default AboutSection;