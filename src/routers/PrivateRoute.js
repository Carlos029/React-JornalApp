import React from 'react'
import {Navigate} from "react-router-dom";


export const PrivateRoute = ({children,isAuthenticated}) => {

    return (
       
       isAuthenticated  //true
       ? 
       children
       :
       <Navigate to='/auth/login'/>

    )
}
