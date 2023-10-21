import { useEffect } from "react";

const Menu =({setActive}) => {
    useEffect(() => {
        setActive('menu')
    }, [])

    return (
        <div id="menu" data-testid="menu_component">
            <h1>Hello Menu</h1>
        </div>
    )
}

export default Menu;