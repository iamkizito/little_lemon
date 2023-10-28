// import { render, fireEvent, screen, waitFor} from '@testing-library/react';
// import Header from '../components/Header';
// import paths from '../paths';
// import { MemoryRouter } from 'react-router-dom';
// import { navLinks } from '../components/Header';
// import { useCartContext } from '../contexts/useCartContext';


// jest.mock('../contexts/useCartContext', () => ({
//     useCartContext: jest.fn().mockReturnValue({ cart: {} })
// }));


// describe("Header Component", () => {

//     beforeEach(() => {
//         let active = navLinks.home;
//         render (
//             <Header active={active}/>
//         )
//     })

//     test("renders correctly header component", () => {
//         const headerComponent = screen.getByTestId('header_component')
//         expect(headerComponent).toBeInTheDocument()
//     });

//     test("navigation links href is correct", () => {

//         navLinks.forEach((navLink) => {
//             const navElement = screen.getByTestId(`${navLink.name}_link`)
//             expect(navElement.getAttribute('href')).toBe(navLink.url);
//         })
    
//     });
// });





