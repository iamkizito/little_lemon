import { useEffect, useState } from "react";

const ReservationForm = ({setFormdata}) => {
    const today = new Date()

    const [date, setDate] = useState(today.toISOString().split('T')[0])
    const [time, setTime] = useState('')
    const [guest, setGuest] = useState(1)
    const [occasion, setOccasion] = useState('')
    const [formValidationError, setFormValidationError] = useState(null)
    const occasions = ['birthday', 'wedding', 'other']

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            date: date,
            time: time,
            guest: guest,
            occasion: occasion,
        }
        
        if (validateFormData(data)) {
            setFormdata(data)
            resetForm()
        }    
    }
    
    const validateFormData = (data) => {
        for (let key in data) {
            if (data[key] == '') {
                setFormValidationError(`${key} is required`)
                return false
            }
        }
        return true
    }
 
    const resetForm = () => {
        setDate('')
        setTime('')
        setGuest(1)
        setOccasion('')
        setFormValidationError(null)
    }

    const {availableTimes, loading, error} = useAvailableTimes(date)

    return (
        <form action=""  onSubmit={handleSubmit} data-testid="booking_form_component">
            {formValidationError && <div className="error" data-testid="error">{formValidationError}</div>}

            <div>
                <label htmlFor="date">Select a Date</label>
                <input type="date" name="date" id="date" data-testid="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="time">Select preferred time</label>
                <select name="time" id="time" data-testid="time" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value=""></option>
                    {availableTimes.map((availableTime, index) => {
                        return (
                            <option key={index} value={availableTime}>{availableTime}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="guest">Number of guests</label>
                <input type="number" name="guest" id="guest" data-testid="guest" min={1} max={10} value={guest} onChange={(e) => setGuest(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="occasion">Choose Occasion</label>
                <select name="occasion" id="occasion" data-testid="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value=""></option>
                    {occasions.map((occasion, index) => {
                        return (
                            <option key={index} value={occasion}>{occasion[0].toUpperCase() + occasion.slice(1).toLowerCase()}</option>
                        )
                    })}
                </select>
            </div>
            <input type="submit" data-testid="submit" value="make your reservation"/>
        </form>
    )
}

export default ReservationForm;





export const useAvailableTimes = (date) => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getAvailableTimes = () => {
            setLoading(true);
            setTimeout(() => {
                setAvailableTimes(['17:00', '18:00', '19:00']);
                setLoading(false);
            }, 1000);
        };

        getAvailableTimes();
    }, [date]);

    return {availableTimes, loading, error}
}
