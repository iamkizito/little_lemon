import { useEffect } from "react";

const Order = ({setActive}) => {
    useEffect(() => {
        setActive('order online')
    }, [])

    return (
        <div id="order" data-testid="order_component">
            <h1>Order Time</h1>
        </div>
    )
}

export default Order;