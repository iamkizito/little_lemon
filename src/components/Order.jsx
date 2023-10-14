import { useEffect } from "react";

const Order = ({setActive}) => {
    useEffect(() => {
        setActive('order online')
    }, [])

    return (
        <h1>Order Time</h1>
    )
}

export default Order;