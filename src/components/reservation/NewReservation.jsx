import { useEffect, useState } from "react";
import DetailsForm from "./DetailsForm";
import ConfirmReservation from "./ConfirmReservation";
import PaymentForm from "./PaymentForm";
import ReservationStatus from './ReservationStatus';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const NewReservation = ({setReservations}) => {
    const [step0Data, setStep0Data] = useState({});
    const [step1Data, setStep1Data] = useState({});
    const [step, setStep] = useState(0);

    const [newReservation, setNewReservation] = useState(null)
    const {response, setResponse, loading, error} = useSubmitNewReservation(newReservation, setReservations)


    const handleSubmit = () => {
        setResponse(null)
        setNewReservation({...step0Data, ...step1Data})
        setStep(currentStep => currentStep + 1)   
    }

    const getStep = (step) => {
        switch (step) {
            case 0:
                return <DetailsForm setStep={setStep} formData={step0Data} setFormData={setStep0Data} /> 
            case 1:
                return <PaymentForm setStep={setStep} formData={step1Data} setFormData={setStep1Data} /> 
            case 2:
                return <ConfirmReservation setStep={setStep} formData0={step0Data} formData1={step1Data} handleSubmit={handleSubmit}/> 
            case 3:
                return <ReservationStatus response={response} loading={loading} error={error} setStep={setStep}/>
            default:
                return
        }
    }

    return (
        <div id="new_reservation" data-testid="reservation_component">
            <h1>Make a reservation</h1>
            <Steps step={step}/> 
            {getStep(step)}
        </div>
    )
}


export default NewReservation;



const Steps = ({step}) => {

    return (
        <div id="steps">
            <div className="step details">
                <div className="number">
                    { step >= 1 
                        ? <FontAwesomeIcon icon={faCircleCheck} />
                        : 1
                    }
                </div>
                <div className="name">Reservation info</div> 
            </div>

            <div className="step payment">
                <div className="number">
                    { step >= 2 
                        ? <FontAwesomeIcon icon={faCircleCheck} />
                        : 2
                    }
                </div>
                <div className="name">Payment info</div>
            </div>

            <div className="step confirm">
                <div className="number">
                    { step >= 3 
                        ? <FontAwesomeIcon icon={faCircleCheck} />
                        : 3
                    }
                </div>
                <div className="name">Confirm and pay</div>
            </div>
        </div>
    )
}






export const useSubmitNewReservation = (newReservation, setReservations) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (newReservation  === null) {
            return 
        }
        const postData = () => {
            setLoading(true)
            setTimeout(() => {
                let response = {
                    status:'success',
                    message: 'Your reservation has been booked successfully',
                    data: newReservation
                }
                setResponse(response)
                setReservations(prevState => [...prevState, response.data])
                setLoading(false)
            }, 2000)
        }

        postData()
    }, [newReservation])

    return {response, setResponse, loading, error}
}




