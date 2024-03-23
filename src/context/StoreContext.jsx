import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        // If the item with a specific itemId has not been previously added to the cart, add it as a new item to the cart and set its quantity to 1.
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]: 1}))
        }
        // If the item with a specific itemId is already in the cart, increment its quantity.
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        // If the item with a specific itemId has been previously added to the cart, decrement its quantity.
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));
    }

    useEffect(()=> {
        console.log(cartItems);
        },[cartItems]);



    // The context value contains food list, cart items, and functions to update the cart
    const contextValue = {
        food_list, 
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    // Provider component to provide the context value to its children
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
