import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { colorPallete as cp } from "../variables";


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



const Socials = ({iconWidth, ...props}) => {
    return (
        <HStack spacing={5} {...props}>
            {socials.map((social, index) => {
                return (
                    <Social 
                        key={index}
                        href={social.url}
                        icon={social.icon}
                        width={iconWidth}
                        height={iconWidth}
                    />
                )
            })}
        </HStack>
    )
}

export default Socials;



const Social = ({href, icon, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Box as="a" className='social' href={href} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
            color = {isHovered? cp.secondary1 : ""}
            {...props}
        >
            <FontAwesomeIcon icon={icon} style={{width:"100%", height:"100%", objectFit:"cover"}} />
        </Box>
    )
}
