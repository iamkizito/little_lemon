import React, { useEffect, useState } from "react";
import logo from '../assets/images/Logo.svg'
import paths from "../paths";
import { Link } from "react-router-dom";
import SectionContainer from "./SectionContainer";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../contexts/useCartContext";
import { Box, Flex, Image } from "@chakra-ui/react";
import { colorPallete as cp } from "../variables";
import NavItem from "./NavItem";

export const navLinks = [
    {
        name:'home',
        url: paths.home
    },
    {
        name:'menu',
        url: paths.menu
    },
    {
        name:'reservation',
        url: paths.reservation
    },
    {
        name:'Orders',
        url: paths.orders
    },
    {
        name:'login',
        url: paths.login
    },
]


const Header = ({active}) => {

    const {cart} = useCartContext()

    const totalInCart = () => {
        let count = 0
        cart.forEach((item, index) => {
            count += item.count
        })
        return count
    }

    return (
        <Box as="header" id="header" data-testid="header_component"
            padding="20px 0"
            height="80px"
            fontSize="0.9rem"
            fontWeight="bold"
        >
            <SectionContainer className="container"
                flex={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box className="logo">
                    <Image src={logo} alt="Logo" />
                </Box>

                <Flex as="nav" className="nav_items" gap="30px">
                    {navLinks.map((navLink, index) => {
                        return (                          
                            <NavItem to={navLink.url} activeNav={active} navName={navLink.name}> 
                                {navLink.name[0].toUpperCase() + navLink.name.slice(1).toLowerCase()}
                            </NavItem>
                        )              
                    })}
                </Flex>

                <CartIconLink to={paths.cart} total={totalInCart()}/>
            </SectionContainer>
        </Box>
    )
};
export default Header;




const CartIconLink = ({to, total}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={to}  className="cart_link">
            <Box className="cart" 
                position="relative" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                color={isHovered ? cp.primary2 : cp.primary1}
            >
                <Box className="count" color={cp.primary2} fontSize="1rem" position="absolute" left="28px" top="-15px">
                    {total}
                </Box>
                <Box className="icon" width="30px" height="30px">
                    <FontAwesomeIcon style={{width:"100%", height:"100%"}} icon={faCartShopping}/>
                </Box>
            </Box>
        </Link>
    )
    
}
