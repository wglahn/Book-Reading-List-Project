import { useEffect, useState } from 'react'
import { CancelToken } from 'apisauce';
import { getBook } from '../api/apiBook';

export default function useBook(id) {
    const [book, setBook] = useState([])

    useEffect(
        ()=>{
            const source = CancelToken.source();
            (async()=>{
             const response = await getBook(id, source.token)
             setBook(response)
            })()
            return ()=>{source.cancel();}
        },[id]

    )

    return book
} 
