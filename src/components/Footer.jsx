import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import '../assets/styles/footer.css';
import footerLogo from '../assets/images/Asset 18@4x.png';
import SectionContainer from "./SectionContainer";
import { navLinks } from "./Header";
import { Link } from "react-router-dom";

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
        <footer id="footer" data-testid="footer_component">
            <SectionContainer className="wrapper">
                <div className="image">
                    <img src={footerLogo} alt="logo image" />
                </div>

                <div className="navigation">
                    <h1 className="title">Navigation</h1>
                    <nav className="nav_items">
                        {navLinks.map((navLink, index) => {
                            let name = navLink.name.toLowerCase()
                            return (
                                <Link key={index} to={navLink.url} className="nav_item"  
                                    onClick={() => setActive(name)}
                                >
                                    {navLink.name}
                                </Link>  
                            )              
                        })}
                    </nav>
                </div>


                <div className="contacts">
                    <h1 className="title">Contact details</h1>
                    {contacts.map((contact, index) => {
                        return (
                            <div key={index} className="contact">{contact.name}: {contact.value}</div>
                        )
                    })}
                </div>

                <div className="socials">
                    <h1 className="title">Social media</h1>
                    {socials.map((social, index) => {
                        return (
                            <Link key={index} className='social' to={social.url} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={social.icon} />
                            </Link>
                        )
                    })}
                </div>
            </SectionContainer>
        </footer>
    )
}

export default Footer;