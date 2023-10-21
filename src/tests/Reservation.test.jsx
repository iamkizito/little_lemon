import { render, fireEvent, screen, waitFor, act} from '@testing-library/react';
import Reservation from '../components/reservation/Reservation';


describe("Reservation Component", () => {
    let setActive;

    beforeEach(() => {
        setActive = jest.fn();
        render(<Reservation setActive={setActive}/>)
    })
    
    test("function to highlight nav is called correctly", () => {
        expect(setActive).toHaveBeenCalled()
    });

    test("renders BookingForm correctly", () => {
        const bookingFormSection = screen.getByTestId('booking_form_component')
        expect(bookingFormSection).toBeInTheDocument()    
    });

    test("BookingForm displays validation error when some form fields dont have value set", async () => {
        // const mockUseAvailableTimes = jest.spyOn(Reservation, 'useAvailableTimes')
        // useAvailableTimes.mockReturnValue(['17:00', '18:00', '19:00']);

        // Get form inputs
        const dateInput = screen.getByTestId('date');
        const timeInput = screen.getByTestId('time');
        const guestInput = screen.getByTestId('guest');
        const occasionInput = screen.getByTestId('occasion');
        
        // define values to be tested with
        const date = '2023-10-17'
        const time = '17:00'
        const guest = "5"
        const occasion = "wedding"
        
        // Fill in form inputs
        fireEvent.change(dateInput, { target: { value: date } });
        await waitFor (() => {
            screen.getByText('17:00')
        }, {timeout:2000})
        fireEvent.change(timeInput, { target: { value: time } });
        fireEvent.change(guestInput, { target: { value: guest } });
        fireEvent.change(occasionInput, { target: { value: occasion } });
    
        // Assert form data
        expect(dateInput.value).toBe(date);
        expect(guestInput.value).toBe(guest);
        expect(occasionInput.value).toBe(occasion);
        expect(timeInput.value).toBe(time);
        
        // Submit the form
        const submitButton = screen.getByTestId('submit');
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(screen.getByTestId('success')).toBeInTheDocument()
        }, {timeout: 2000})
    });
});