import { useEffect } from 'react';
import { postUser, putUser } from '../api/apiUser';
import { CancelToken } from 'apisauce';

export default function useRegisterUser(data, token=null) {
    
    useEffect(
        ()=>{
            const source = CancelToken.source();
            
            token ? 
            (async()=>{ //edit
                const response = await putUser(token, data, source.token);
                console.log(response,"edit")
            })()
            :
            (async()=>{ //create
                const response = await postUser(data.email, data.first_name, data.last_name, data.password, source.token);
                console.log(response,"create")
            })()
            return ()=>{source.cancel()}
        },[data, token] //listeners, what is passed into the function needs to be here too.
    )
}