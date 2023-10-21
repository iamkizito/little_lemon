import { render, fireEvent, screen, waitFor} from '@testing-library/react';
import Header from '../components/Header';
import paths from '../paths';
import { MemoryRouter } from 'react-router-dom';

describe("Header Component", () => {
    let setActive;

    beforeEach(() => {
        setActive = jest.fn();
        render(
            <MemoryRouter>
                <Header setActive={setActive}/>
            </MemoryRouter>
        )
    })

    test("renders correctly header component", () => {
        const headerComponent = screen.getByTestId('header_component')
        expect(headerComponent).toBeInTheDocument()
    });

    test("function to highlight nav is called correctly", () => {
        expect(setActive).toHaveBeenCalled()
    });

    test("navigation links href is correct", () => {
        const homeNav = screen.getByTestId('home_nav')
        const menuNav = screen.getByTestId('menu_nav')
        const reservationNav = screen.getByTestId('reservation_nav')
        const orderNav = screen.getByTestId('order_nav')
        const loginNav = screen.getByTestId('login_nav')

        expect(homeNav.getAttribute('href')).toBe(paths.home);
        expect(menuNav.getAttribute('href')).toBe(paths.menu);
        expect(reservationNav.getAttribute('href')).toBe(paths.reservation);
        expect(orderNav.getAttribute('href')).toBe(paths.order);
        expect(loginNav.getAttribute('href')).toBe(paths.login);
    });
});