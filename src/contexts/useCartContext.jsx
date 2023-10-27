import { useState, useContext, createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import paths from "../paths";


const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    // const { data, loading, error } = useFetch(paths.cart)

    const addToCart = (newItem) => {
        let updatedCart = []
        let found = false

        cart.forEach((item, index) => {
            if (item.id === newItem.id) {
                found = true
                item.count ++
            }
            updatedCart.push(item)
        })

        if (found == false) {
            newItem.count = 1
            updatedCart.push(newItem)
        }
        setCart(updatedCart)
    }

    return (
        <CartContext.Provider 
            value={{cart, addToCart}}
        >
            {children}      
        </CartContext.Provider>
    )
}


export const useCartContext = () => useContext(CartContext)
