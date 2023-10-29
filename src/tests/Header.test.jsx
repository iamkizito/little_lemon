import { render, fireEvent, screen, waitFor, act} from '@testing-library/react';
import Header from '../components/Header';
import paths from '../paths';
import { MemoryRouter } from 'react-router-dom';
import { navLinks } from '../components/Header';
import { CartProvider } from '../contexts/useCartContext';


describe("Header Component", () => {

    beforeEach(() => {
        let active = navLinks.home;

        act(() => {
            render (
                <CartProvider>
                    <MemoryRouter>
                        <Header active={active}/>
                    </MemoryRouter>
                </CartProvider>
            )
        })
    })

    test("renders correctly header component", () => {
        const headerComponent = screen.getByTestId('header_component')
        expect(headerComponent).toBeInTheDocument()
    });

    test("navigation links href is correct", () => {
        navLinks.forEach((navLink) => {
            const navElement = screen.getByTestId(`${navLink.name}_nav`)
            expect(navElement.getAttribute('href')).toBe(navLink.url);
        })
    
    });
});





