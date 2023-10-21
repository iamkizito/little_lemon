import React, { useEffect, useState } from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from '../assets/images/Logo.svg'
import '../assets/styles/header.css';
import paths from "../paths";
import { Link } from "react-router-dom";

const navLinks = [
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
        name:'order',
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

    return (
        <header id="header" data-testid="header_component">
            <div className="wrapper">
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
            </div>
        </header>
    )
};
export default Header;
