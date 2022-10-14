import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const useCartContext = () => {return(useContext(CartContext))} 

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.some((cart => cart.id === id));

    const addItem = (quantity, item) => {
        if(isInCart(item.id)) {
            return alert("Este servicio ya esta incluido"); 
        }

        const addItem = {...item, quantity}
        setCart([...cart, addItem]);
        console.log(cart)
    }

    const removeItem = (itemId) => {
        const removeItem = cart.filter(cart => cart.id !== itemId);
        return setCart(removeItem);
    }

    const clear = () => {
        setCart([]);
    }


return ( <CartContext.Provider value={{isInCart, addItem, removeItem, clear, cart}}>
    {children}
</CartContext.Provider> );
}
