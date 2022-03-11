import {createContext, useState, useReducer, useEffect} from "react";
import { shopReducer, cartActions } from "../reducers/shopReducer";

export const BookListContext = createContext(); 

const BookListProvider=({children})=>{

    const getCartFromLS=()=>{
        let cart = localStorage.getItem('cart');
        if(cart){
            return JSON.parse(cart)
        }
        return []
    }

    const [books, setBooks] = useState([]);
    const [cart, dispatch] = useReducer(shopReducer,getCartFromLS())

    useEffect(
        ()=>{
            localStorage.setItem('cart', JSON.stringify(cart))
        },
        [cart]
    )

    const values={
        books,
        setBooks,
        cart,
        addToCart:(item)=>{
            dispatch({type: cartActions.addToCart, item})
        },
        removeFromCart:(item)=>{
            dispatch({type: cartActions.removeFromCart, item})
        },
        emptyCart:()=>{
            dispatch({type:cartActions.emptyCart})
        }
    }


    return(
        <BookListContext.Provider value={values}>
            {children}    
        </BookListContext.Provider>
    )
}

export default BookListProvider