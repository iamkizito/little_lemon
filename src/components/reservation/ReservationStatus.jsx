import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import paths from "../../paths";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

const ReservationStatus = ({response, loading, error, setStep}) => {

    const successMessage = "Your spot has been reserved successfully. please make sure to be on time"
    const failureMessage = "An error occured, and your reservation failed. try again"

    const handleAgain = () => {
        setStep(0)
    }

    return (    
        <div id="reservation_status">
            {loading && <Loading/>}

            {!loading && response && (
                <>
                <h1>{response && response.status === 'success' ? 'Reservation Successfull': 'Reservation Failed'}</h1>
                <div className="icon">
                    {response && response.status === 'success' 
                        ? <FontAwesomeIcon className="success" icon={faCircleCheck}/>
                        : <FontAwesomeIcon className="failed" icon={faCircleXmark}/>
                    }     
                </div>
                <p>{response && response.status === 'success' ? successMessage: failureMessage}</p>

                <div className="buttons">
                    <Button className="button again" data-testid="again" onClick={handleAgain}>
                        {response && response.status === 'success' ? 'New Reservation': 'Try Again'}
                    </Button>
                    <Link to={paths.home} className="button return" data-testid="return">Return to Home</Link>
                </div>
                </>
            )}

        </div>
    )
}

export default ReservationStatus;


const Loading = () => {
    return (
        <div className="submitting_reservation">
            <Spinner/>
            <div className="message">Submitting Reservation</div>
        </div>
    )
}

