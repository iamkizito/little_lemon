import { useEffect } from "react";

const Menu =({setActive}) => {
    useEffect(() => {
        setActive('menu')
    }, [])

    return (
        <h1>Hello Menu</h1>
    )
}

export default Menu;