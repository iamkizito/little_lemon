import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";

const Reservation = ({setActive}) => {
    const [formData, setFormdata] = useState(null)

    useEffect(() => {
        setActive('reservation')
    }, [])

    const {response, loading, error} = useSubmitForm(formData)

    return (
        <div id="reservation" data-testid="reservation_component">
            {response && <div className="success" data-testid="success">{response.message}</div>}

            <h1>Make reservation</h1>
            <ReservationForm setFormdata={setFormdata}/>
        </div>
    )
}

export default Reservation;



export const useSubmitForm = (formData) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (formData  === null) {
            return 
        }
        const postData = () => {
            setLoading(true)
            setTimeout(() => {
                setResponse({
                    status:'success',
                    message: 'Reservation booked successfully',
                    data: {}
                })
                setLoading(false)
            }, 1000)
        }

        postData()
    }, [formData])

    return {response, loading, error}
}



