import {createContext, useState} from "react";

export const BookListContext = createContext(); 

const BookListProvider=({children})=>{

    const [books, setBooks]=useState([]);

    const values={
        books,
        setBooks
    }

    return(
        <BookListContext.Provider value={values}>
            {children}    
        </BookListContext.Provider>
    )
}

export default BookListProvider