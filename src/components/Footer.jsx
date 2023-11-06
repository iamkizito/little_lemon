import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import footerLogo from '../assets/images/Asset 18@4x.png';
import SectionContainer from "./SectionContainer";
import { navLinks } from "./Header";
import { Link } from "react-router-dom";
import { Flex, Box, Image, Grid } from "@chakra-ui/react";
import { colorPallete as cp } from "../variables";
import FooterNavLink from "./FooterNavLink";
import Socials from "./Socials";


const contacts = [
    {
        name: 'Telephone',
        values: ["+23 81202302323", "+23 81232323"],
    },
    {
        name: 'Email',
        values: ["support@littlelemon.com"],
    },
];


const Footer = ({setActive}) => {
    return (
        <Flex as="footer" id="footer" data-testid="footer_component"
            minHeight="300px"
            justify="center"
            paddingTop="50px"
            bg={cp.highlight2}
            color={cp.highlight1}
            paddingLeft="20px"
            paddingRight="20px"
        >
            <SectionContainer className="section-container"
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                fontSize="0.75rem"
            >
                <Grid 
                    gridTemplateColumns={{base:"repeat(2, 1fr)", md:"repeat(4, 1fr)"}} 
                    justifyItems="center"
                    alignItems="start"
                >
                    
                    <Image width="70px" objectFit="contain" src={footerLogo} alt="logo image" />

                    <Box className="navigation" 
                        display={{base:"none", md:"block"}}
                    >
                        <Box as="h1" className="title" fontSize="1rem" fontWeight="bold" marginBottom="10px">
                            Navigation
                        </Box>
                        <Box as="nav" className="nav_items">
                            {navLinks.map((navLink, index) => {
                                let name = navLink.name.toLowerCase()
                                return (
                                    <FooterNavLink as={Link} key={index} to={navLink.url} className="nav_item" 
                                        display="block"
                                        padding="5px" 
                                        onClick={() => setActive(name)}
                                    >
                                        {navLink.name}
                                    </FooterNavLink>  
                                )              
                            })}
                        </Box>
                    </Box>


                    <Box className="contacts">
                        <Box as="h1" className="title" fontSize="1rem" fontWeight="bold" marginBottom="10px">
                            Contact details
                        </Box>

                        {contacts.map((contact, index) => {
                            return (
                                <Flex key={index} className="contact" flexWrap="wrap" marginBottom="10px">
                                    <Box className="name">{contact.name}:</Box>
                                    {contact.values.map((value, index) => {
                                        return (
                                            <Box key={index} className="value">{value}</Box>
                                        )
                                    })}    
                                </Flex>
                            )
                        })}
                    </Box>

                    <Socials
                        marginTop={{base:"30px", md:"0px"}}
                        gridColumn={{base:"span 2", md:"span 1"}}
                        iconWidth="20px"
                    />
                </Grid>

                <Box as="p" marginTop="30px">Anthony Obiora • © 2022</Box>
            </SectionContainer>
        </Flex>
    )
}


export default Footer;





