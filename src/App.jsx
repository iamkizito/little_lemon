import {useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/HomePage";
import MenuPage from "./components/menu/MenuPage";
import ReservationPage from "./components/reservation/ReservationPage";
import OrdersPage from "./components/orders/OrdersPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import TestPage from "./components/TestPage";
import paths from './paths';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CartProvider } from "./contexts/useCartContext";

import './App.css'

const App = () => {
    const [active, setActive] = useState('home')

    return (
        <div id="app">
            <CartProvider>
                <ChakraProvider>
                    <Router>
                        <Header active={active} setActive={setActive}/>
                        <Routes>
                            <Route exact path={paths.home} element={<Home setActive={setActive}/>}/>
                            <Route exact path={paths.menu} element={<MenuPage setActive={setActive}/>}/>
                            <Route exact path={paths.orders} element={<OrdersPage setActive={setActive}/>}/>
                            <Route exact path={paths.reservation} element={<ReservationPage setActive={setActive}/>}/>
                            <Route exact path={paths.login} element={<LoginPage setActive={setActive}/>}/>
                            <Route exact path={paths.register} element={<RegisterPage/>}/>
                            <Route exact path={paths.test} element={<TestPage/>}/>
                            {/* <Route path="*" element={<NoPage />} /> */}
                        </Routes>
                        <Footer setActive={setActive}/>
                    </Router>
                </ChakraProvider>
            </CartProvider>
        </div>
    )
}

export default App;