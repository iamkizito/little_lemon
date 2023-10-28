import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import footerLogo from '../assets/images/Asset 18@4x.png';
import SectionContainer from "./SectionContainer";
import { navLinks } from "./Header";
import { Link } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";
import { colorPallete as cp } from "../variables";
import BottomNavLink from "./BottomNavLink";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
            icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];

const contacts = [
    {
        name: 'telephone1',
        value: "+23 81202302323",
    },
    {
        name: 'telephone2',
        value: "+23 81232323",
    },
    {
        name: 'email',
        value: "support@littlelemon.com",
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
            <SectionContainer className="wrapper"
                flex={1}
                display="flex"
                justifyContent="space-between"
                alignItems="start"
                fontSize="0.75rem"
                gap="20px"
            >
                <Image width="70px" objectFit="contain" src={footerLogo} alt="logo image" />

                <Box className="navigation">
                    <Box as="h1" className="title" fontSize="1rem" fontWeight="bold" marginBottom="10px">
                        Navigation
                    </Box>
                    <Box as="nav" className="nav_items">
                        {navLinks.map((navLink, index) => {
                            let name = navLink.name.toLowerCase()
                            return (
                                <BottomNavLink as={Link} key={index} to={navLink.url} className="nav_item" 
                                    display="block"
                                    padding="5px" 
                                    onClick={() => setActive(name)}
                                >
                                    {navLink.name}
                                </BottomNavLink>  
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
                            <Flex className="contact" flexWrap="wrap" marginBottom="10px">
                                <Box key={index} className="name">{contact.name}:</Box>
                                <Box key={index} className="value">{contact.value}</Box>
                            </Flex>
                        )
                    })}
                    <SocialMedia socials={socials} display={{base: 'block', md: 'none'}}/>
                </Box>

                <SocialMedia socials={socials} display={{base: 'none', md: 'block'}}/>
            </SectionContainer>
        </Flex>
    )
}

export default Footer;




const SocialMedia = ({socials, ...props}) => {
    return (
        <Box className="social_media" {...props}>
            <Box as="h1" className="title" fontSize="1rem" fontWeight="bold" marginBottom="10px">
                Social media
            </Box>
            <Flex className="socials" gap="20px" flexWrap="wrap">
                {socials.map((social, index) => {
                    return (
                        <Box as={Link} key={index} className='social' to={social.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{width: "100%"}} icon={social.icon} />
                        </Box>
                    )
                })}
            </Flex>
        </Box>
    )
}



