import { useEffect, useState } from "react";
import '../../assets/styles/reservationPage.css';
import Main from "../Main";
import SectionContainer from "../SectionContainer";
import NewReservation from "./NewReservation";
import Reservation from "./Reservation";
import { Skeleton } from "@chakra-ui/react";

const InitialReservationsFromServer = [
    {
        id: 1,
        date: '2023-10-18',
        time: '04:00',
        guest: 4,
        occasion: 'Wedding',
    },
    {
        id: 2,
        date: '2023-10-24',
        time: '18:00',
        guest: 8,
        occasion: 'Birthday',
    },
]


const ReservationPage = ({setActive}) => {

    useEffect(() => {
        setActive('reservation')
    }, [])

    const {reservations, setReservations, loading, error} = useReservations()

    return (
        <Main id="reservation" data-testid="reservation_main_component">
            <section id="new_reservation_section">
                <SectionContainer className="container">
                    <NewReservation setReservations={setReservations}/>  
                    <div className="content">
                        <h1>Make a reservation</h1>
                        <p>Thank you for choosing our restaurant! Please fill out the reservation form to make a reservation</p>
                    </div>
                </SectionContainer>
            </section>

            <section id="reservation_history_section">
                <SectionContainer className="container">
                    <h1>Reservation History</h1>
                    <div className="reservations">
                        {reservations && reservations.map((reservation) => {
                            return (
                                <Reservation
                                    key={reservation.id}
                                    date={reservation.date}
                                    time={reservation.time}
                                    guest={reservation.guest}
                                    occasion={reservation.occasion}
                                />
                            )
                        })}
                    </div>
                </SectionContainer>
            </section>
        </Main>
    )
}

export default ReservationPage;



export const useReservations = () => {
    const [reservations, setReservations] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = () => {
            setLoading(true)
            setTimeout(() => {
                setReservations(InitialReservationsFromServer)
                setLoading(false)
            }, 1000)
        }

        getData()
    }, [])

    return {reservations, setReservations, loading, error}
}










