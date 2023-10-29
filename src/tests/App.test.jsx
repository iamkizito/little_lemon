import { render, fireEvent, screen, waitFor, act} from '@testing-library/react';
import App from '../App';
import { navLinks } from '../components/Header';

describe("App", () => {

    test("renders correctly, header home and footer component", () => {
        render(<App/>)  
        const headerComponent = screen.getByTestId('header_component')
        const homeComponent = screen.getByTestId('home_page_component')
        const footerComponent = screen.getByTestId('footer_component')
        expect(headerComponent).toBeInTheDocument()
        expect(homeComponent).toBeInTheDocument()
        expect(footerComponent).toBeInTheDocument()
    });

    test("menu navlink navigates correctly", () => {
        render(<App/>)  
        let menuLink = screen.getByTestId(`menu_nav`) 
        fireEvent.click(menuLink)
        let component = screen.getByTestId(`menu_page_component`)
        expect(component).toBeInTheDocument()
    });

    test("reservation navlink navigates correctly", () => {
        render(<App/>)  
        let reservationLink = screen.getByTestId(`reservation_nav`) 
        fireEvent.click(reservationLink)
        let component = screen.getByTestId(`reservation_page_component`)
        expect(component).toBeInTheDocument()
    });

    // test("home page's goto reservation button navigates correctly to expected pages", async () => {
    //     render(<App/>) 
    //     await waitFor(() => {
    //         reservationButton = screen.getByTestId('goto_reservation')
    //         fireEvent.click(reservationButton)
    //         let reservationComponent = screen.getByTestId(`reservation_component`)
    //         expect(reservationComponent).toBeInTheDocument()
    //     })
    // });

    // test("home page's goto menu button navigates correctly to expected pages", async () => {  
    //     await waitFor(() => {
    //         const menuButton = screen.getByTestId('goto_menu')
    //     }, 3000)   
    //     fireEvent.click(menuButton)
    //     let menuComponent = screen.getByTestId(`menu_component`)
    //     expect(menuComponent).toBeInTheDocument()
    // });
});