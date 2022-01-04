import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { login } from '../actions/auth'
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(true)


    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) => {  

            if (user?.uid) {   
                dispatch( login( user.uid, user.displayName ) )
                setIsLoggedIn( true )

                dispatch( startLoadingNotes( user.uid ) )

            } else {
                setIsLoggedIn( false )
            }

            setChecking( false ) 

        })

    }, [dispatch, setChecking, setIsLoggedIn])  


    if (checking) {
        return (
            <h1>Espere un momento...</h1>
            
        )
    }

    return (

        <Router>


            <Routes>
                <Route path="/auth/*" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <AuthRouter />
                    </PublicRoute>
                }>
                </Route>


                <Route path="/" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <JournalScreen />
                    </PrivateRoute>

                }>
                </Route>

                <Route path="/*" element={<Navigate to='/auth/login' />}></Route>



            </Routes>
        </Router>
    )
}
