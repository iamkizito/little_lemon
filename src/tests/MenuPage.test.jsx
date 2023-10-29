import { render, fireEvent, screen, act} from '@testing-library/react';
import MenuPage from '../components/menu/MenuPage';
import paths from '../paths';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../contexts/useCartContext';

describe("MenuPage Component", () => {
    let setActive;
    
    beforeEach(() => {
        setActive = jest.fn();
        act(() => {
            render (
                <CartProvider>
                    <MemoryRouter>
                        <MenuPage setActive={setActive}/>
                    </MemoryRouter>
                </CartProvider>
            )
        })
    })

    test("function to highlight nav in header is called correctly", () => {    
        expect(setActive).toHaveBeenCalled()
    });

    test("renders correctly", () => {
        const homeElement = screen.getByTestId('menu_page_component')
        expect(homeElement).toBeInTheDocument() 
    });
});