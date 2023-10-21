import { render, fireEvent, screen, waitFor} from '@testing-library/react';
import Home from '../components/home/Home';
import paths from '../paths';
import { MemoryRouter } from 'react-router-dom';

describe("Home Component", () => {
    let setActive;
    
    beforeEach(() => {
        setActive = jest.fn();
        render(
            <MemoryRouter>
                <Home setActive={setActive}/>
            </MemoryRouter>
        )
    })

    test("function to highlight nav is called correctly", () => {    
        expect(setActive).toHaveBeenCalled()
    });

    test("renders correctly", () => {
        const homeElement = screen.getByTestId('home_component')
        expect(homeElement).toBeInTheDocument() 

        const heroSection = screen.getByTestId('hero_component')
        expect(heroSection).toBeInTheDocument()

        const highlightsSection = screen.getByTestId('highlights_component')
        expect(highlightsSection).toBeInTheDocument()

        const testimonialsSection = screen.getByTestId('testimonials_component')
        expect(testimonialsSection).toBeInTheDocument()

        const aboutSection = screen.getByTestId('about_component')
        expect(aboutSection).toBeInTheDocument()
    });

    test("buttons redirect correctly to expected pages", () => {
        const reservationButton = screen.getByTestId('goto_reservation')
        expect(reservationButton.getAttribute("href")).toBe(paths.reservation)    

        const menuButton = screen.getByTestId('goto_menu')
        expect(menuButton.getAttribute("href")).toBe(paths.menu)    
    });
});