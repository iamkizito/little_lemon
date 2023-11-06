import { useState, useContext, createContext } from "react";


const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    // const { data, loading, error } = useFetch(paths.cart)

    const add = (newItem) => {
        let updatedCart = []
        let found = false

        cart.forEach((item, index) => {
            if (item.id === newItem.id) {
                found = true
                item.count ++
            }
            updatedCart.push(item)
        })

        if (found === false) {
            newItem.count = 1
            updatedCart.push(newItem)
        }
        setCart(updatedCart)
    }

    const remove = (newItem) => {
        let updatedCart = []
        let found = false

        cart.forEach((item, index) => {
            if (item.id === newItem.id) {
                found = true
                item.count --
            }

            if (item.count != 0) {
                updatedCart.push(item)
            }
        })
        setCart(updatedCart)
    }

    return (
        <CartContext.Provider 
            value={{cart, add, remove}}
        >
            {children}      
        </CartContext.Provider>
    )
}


export const useCartContext = () => useContext(CartContext)
