import { createContext, useContext } from "react";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Reservation from "../components/Reservation";
import Order from "../components/Order";
import Login from "../components/Login";



const pages = {
    home: {
        name: 'home',
        component: Home,
        path: '/'
    },
    menu: {
        name: 'menu',
        component: Menu,
        path: '/menu'
    },
    reservation: {
        name: 'reservation',
        component: Reservation,
        path: '/reservation'
    },
    order: {
        name: 'order',
        component: Order,
        path: '/order'
    },
}


const pageContext = createContext();


export const PageContextProvider = ({children}) => {
    return (
        <pageContext.Provider value={pages}>
            {children}
        </pageContext.Provider>
    )
}

export const usePageContext = () => useContext(pageContext) 
