import React, { useEffect, useState } from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from '../assets/images/Logo.svg'
import '../assets/styles/header.css';
import paths from "../paths";
import { Link } from "react-router-dom";
import SectionContainer from "./SectionContainer";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../contexts/useCartContext";

export const navLinks = [
    {
        name:'home',
        url: paths.home
    },
    {
        name:'about',
        url: '#about'
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
        url: paths.order
    },
    {
        name:'login',
        url: paths.login
    },
]



const Header = ({active, setActive}) => {
    useEffect(() => {
        setActive('home')
    }, [])

    const {cart, addToCart} = useCartContext()

    const totalInCart = () => {
        let count = 0
        cart.forEach((item, index) => {
            count += item.count
        })
        return count
    }

    return (
        <header id="header" data-testid="header_component">
            <SectionContainer className="wrapper">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="nav_items">
                    {navLinks.map((navLink, index) => {
                        return (
                            <Link key={index} 
                                to={navLink.url}
                                className={`nav_item ${active == navLink.name ? 'showing' : ''}`}  
                                data-testid = {`${navLink.name}_nav`}
                                onClick={() => setActive(navLink.name)}
                            >
                                {navLink.name[0].toUpperCase() + navLink.name.slice(1).toLowerCase()}
                            </Link>  
                        )              
                    })}
                </nav>
                <Link to={paths.cart} className="cart">
                    <div className="count">{totalInCart()}</div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </div>
                </Link>
            </SectionContainer>
        </header>
    )
};
export default Header;
