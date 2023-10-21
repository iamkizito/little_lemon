import { render, fireEvent, screen, waitFor} from '@testing-library/react';
import App from '../App';

describe("App", () => {
            
    beforeEach(() => {
        render(<App/>)
    })

    test("renders correctly, header home and footer component", () => {
        const headerComponent = screen.getByTestId('header_component')
        const homeComponent = screen.getByTestId('home_component')
        const footerComponent = screen.getByTestId('footer_component')
        expect(headerComponent).toBeInTheDocument()
        expect(homeComponent).toBeInTheDocument()
        expect(footerComponent).toBeInTheDocument()
    });

    test("navigates pages correctly", () => {
        const navs = ['menu', 'reservation', 'order', 'home']

        navs.forEach((nav) => {
            let navLink = screen.getByTestId(`${nav}_nav`) 
            fireEvent.click(navLink)
            let component = screen.getByTestId(`${nav}_component`)
            expect(component).toBeInTheDocument()
        })
    });

    test("home page's goto reservation button navigates correctly to expected pages", () => {
        let homeLink = screen.getByTestId(`home_nav`) 
        fireEvent.click(homeLink)

        const reservationButton = screen.getByTestId('goto_reservation')
        fireEvent.click(reservationButton)
        let reservationComponent = screen.getByTestId(`reservation_component`)
        expect(reservationComponent).toBeInTheDocument()
    });

    test("home page's goto menu button navigates correctly to expected pages", () => {
        let homeLink = screen.getByTestId(`home_nav`) 
        fireEvent.click(homeLink)
        
        const menuButton = screen.getByTestId('goto_menu')
        fireEvent.click(menuButton)
        let menuComponent = screen.getByTestId(`menu_component`)
        expect(menuComponent).toBeInTheDocument()
    });
});