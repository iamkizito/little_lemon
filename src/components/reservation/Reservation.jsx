import { faCircleCheck, faCircleXmark, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reservation = ({date, time, guest, occasion}) => {

    const getIcon = (date, time) => {
        const now = new Date()
        const target = new Date(date)
        const [targetHours, targetMinutes] = time.split(":");
        target.setHours(targetHours);
        target.setMinutes(targetMinutes);

        const missed = false
        
        if (now.getTime() > target.getTime()) {
            if (missed) {
                return <FontAwesomeIcon className="missed" icon={faCircleXmark}/>
            } else {
                return <FontAwesomeIcon className="met" icon={faCircleCheck}/>
            }
        } else {
            return <FontAwesomeIcon className="pending" icon={faCircleMinus}/>
        } 
    }
    return (
        <div className="reservation"> 
            <div className="icon">
                {getIcon(date, time)}
            </div>
            <div className="summary">
                <div className="entry date">
                    <div className="name">Reservation date:</div>
                    <div className="value">{date}</div>
                </div>
                <div className="entry time">
                    <div className="name">Reservation time:</div>
                    <div className="value">{time}</div>
                </div>
                <div className="entry guest">
                    <div className="name">Total guests:</div>
                    <div className="value">{guest}</div>
                </div>
                <div className="entry occasion">
                    <div className="name">Occasion:</div>
                    <div className="value">{occasion}</div>
                </div>         
            </div>
        </div>
    )
}


export default Reservation;