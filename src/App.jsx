import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Order from "./components/Order";
import Login from "./components/Login";
import paths from './paths';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
    const [active, setActive] = useState(null)

    return (
        <ChakraProvider>
            <Router>
                <Header active={active} setActive={setActive}/>
                <Routes>
                    <Route exact path={paths.home} element={<Home setActive={setActive}/>}/>
                    <Route exact path={paths.menu} element={<Menu setActive={setActive}/>}/>
                    <Route exact path={paths.order} element={<Order setActive={setActive}/>}/>
                    <Route exact path={paths.reservation} element={<Reservation setActive={setActive}/>}/>
                    <Route exact path={paths.login} element={<Login setActive={setActive}/>}/>
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
                <Footer setActive={setActive}/>
            </Router>
        </ChakraProvider>
    )
}

export default App;