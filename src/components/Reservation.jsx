import { useEffect, useState } from "react";

const Reservation = ({setActive}) => {
    useEffect(() => {
        // highlight the nav button on the header section
        setActive('reservations')
    }, [])

    return (
        <>     
        <h1>Make reservation</h1>
        <BookingForm/>
        </>
    )
}

export default Reservation;



const BookingForm = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guest, setGuest] = useState(1)
    const [occasion, setOccasion] = useState('')

    const [formData, setFormdata] = useState(null)
    const [formResponse, setFormResponse] = useState(null)
    const [formValidationError, setFormValidationError] = useState(null)
    const [availableTimes, setAvailableTimes] = useState([])

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

    useEffect(() => {
        if (formData  === null) {
            return
        }
        const postData = () => {
            setTimeout(() => {
                setFormResponse({
                    status:'success',
                    message: 'Reservation booked successfully',
                    data: {}
                })
            }, 1000)
        }

        postData()
    }, [formData])

    useEffect(() => {
        if (date  === '') {
            return
        }
        const getAvailableTimes = () => {
            setTimeout(() => {
                setAvailableTimes(['17:00', '18:00', '19:00'])
            }, 1000)
        }

        getAvailableTimes()
    }, [date])

    return (
        <form action=""  onSubmit={handleSubmit}>
            {formValidationError && <div className="error">{formValidationError}</div>}
            {!formValidationError && formResponse && <div className="success">{formResponse.message}</div>}

            <div>
                <label htmlFor="date">Select a Date</label>
                <input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="time">Select preferred time</label>
                <select name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}>
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
                <input type="number" name="guest" id="guest" min={1} max={10} value={guest} onChange={(e) => setGuest(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="occasion">Choose Occasion</label>
                <select name="occasion" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value=""></option>
                    {occasions.map((occasion, index) => {
                        return (
                            <option key={index} value={occasion}>{occasion[0].toUpperCase() + occasion.slice(1).toLowerCase()}</option>
                        )
                    })}
                </select>
            </div>
            <input type="submit" value="make your reservation"/>
        </form>
    )
}