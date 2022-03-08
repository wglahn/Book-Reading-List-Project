import { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import { deleteUser } from '../api/apiUser'
import { AppContext } from '../context/AppContext'

export default function useDeleteUser(userCheck) {   
    let response
    const {user} = useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const delUser=async()=>{
                console.log(user.token)
                response = await deleteUser(user.token, source.token);
                if (response){
                    console.log(response, 'delete')
                }else if(response!==undefined && response ===false){
                    console.log(response, 'delete')
                    ///redirect to the login page
                }
            }
            if(userCheck){
                delUser();
            };
            return ()=>{source.cancel()}
        },[userCheck]
    )
  
}