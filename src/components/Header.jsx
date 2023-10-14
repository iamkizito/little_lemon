import React, { useEffect, useState } from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from '../assets/images/Logo.svg'
import '../assets/styles/header.css';
import paths from "../paths";

const navLinks = [
    {
        name:'Home',
        url: paths.home
    },
    {
        name:'About',
        url: '#about'
    },
    {
        name:'Menu',
        url: paths.menu
    },
    {
        name:'Reservations',
        url: paths.reservation
    },
    {
        name:'Order Online',
        url: paths.order
    },
    {
        name:'Login',
        url: paths.login
    },
]



const Header = ({active, setActive}) => {
    useEffect(() => {
        setActive('home')
    }, [])

    return (
        <header id="header">
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="nav_items">
                    {navLinks.map((navLink, index) => {
                        let name = navLink.name.toLowerCase()
                        return (
                            <a key={index} href={navLink.url}
                                className={`nav_item ${active == name ? 'showing' : ''}`}  
                                onClick={() => setActive(name)}
                            >
                                {navLink.name}
                            </a>  
                        )              
                    })}
                </nav>
            </div>
        </header>
    )
};
export default Header;
