import { useEffect } from "react";
import { Button } from "@chakra-ui/react";


const ConfirmReservation = ({formData0, formData1, setStep, handleSubmit}) => {

    const handleBack = () => {
        setStep(currentStep => currentStep - 1)
    }

    const handleNext = () => {
        handleSubmit()
    }
    
    return (
        <div id="confirm_reservation">                 

            <div className="reservation_summary">
                <h1>Reservation Summary</h1>
                <div className="summary">
                    <div className="entry date">
                        <div className="name">Reservation date:</div>
                        <div className="value">{formData0.date}</div>
                    </div>
                    <div className="entry time">
                        <div className="name">Reservation time:</div>
                        <div className="value">{formData0.time}</div>
                    </div>
                    <div className="entry guest">
                        <div className="name">Total guests:</div>
                        <div className="value">{formData0.guest}</div>
                    </div>
                    <div className="entry occasion">
                        <div className="name">Occasion:</div>
                        <div className="value">{formData0.occasion}</div>
                    </div>
                </div>
            </div>

            <div className="payment_summary">
                <h1>Payment Summary</h1>
                <div className="summary">
                    <div className="entry card_holder">
                        <div className="name">Card holder:</div>
                        <div className="value">{formData1.name}</div>
                    </div>
                    <div className="entry card_number">
                        <div className="name">Card Number:</div>
                        <div className="value">{formData1.number}</div>
                    </div>
                    <div className="entry expiry_date">
                        <div className="name">Expiry date:</div>
                        <div className="value">{formData1.expiry}</div>
                    </div>
                </div>
            </div>
                        
            <div className="buttons">
                <Button className="button back" data-testid="back" onClick={handleBack}>Back</Button>
                <Button className="button next" data-testid="submit" onClick={handleNext}>Proceed</Button>
            </div>
        </div>
    )
}

export default ConfirmReservation;



