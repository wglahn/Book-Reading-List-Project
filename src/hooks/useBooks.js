import { useEffect, useContext } from 'react';
import { getBooks } from '../api/apiBook';
import { CancelToken } from 'apisauce';
import { BookListContext } from '../context/BookListContext';

export default function useBooks() {
    const {setBooks}= useContext(BookListContext)
    
    useEffect(
        ()=>{
            const source = CancelToken.source();
            
            const books = async () => {
                console.log('effect')
                const response = await getBooks(source.token);
                setBooks(response.books)
            }
            books()
            return ()=>{source.cancel();}
        },[]
    )
    return 
}