import { googleAuthProvider, firebase } from '../firebase/firebase-config';
import Swal from 'sweetalert2'

import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';
import { deleteAllLogout } from './notes';



//LOGEAR USUARIO CON EMAIL Y PASSWORD
export const startLoginEmailPassword = (email, password) => {  
    return (dispatch) => {

        //este dispatch pone el loading en falso para q que el usuario no pueda tocar otra vez el boton hasta que se termine de verificar el usuario
        dispatch(startLoading()) 

            firebase.auth().signInWithEmailAndPassword(email, password)   
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName)) 
               
                dispatch(finishLoading())  //cambia a loading = true para volver a habilitar el boton 

            }).catch(err => {
                Swal.fire('Error', err.message, 'error') 
                dispatch(finishLoading())
            })
        
    }
    


}


//LOGEAR AL TERMINAR EL REGISTRO 
export const startRegisterWithEmailPasswordName = (email, password, name) => {


    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)  //registra al usuario en firebase 
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name }) 
                dispatch(login(user.uid, user.displayName)) 
            })
            .catch(err => {
                Swal.fire('Error', err.message, 'error')  
            })
    }
}


//LOGEAR USUARIO CON GOOGLE
export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)  //abre la ventana de google
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(err => {
                Swal.fire('Error', err.message, 'error') 
            })

    }

}


//recoge los datos del usuario y los pone en el store de redux 
export const login = (uid, displayName) => {   
    return {

        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}


//logout
export const startLogout = () => {
    return async(dispatch) => {

       await firebase.auth().signOut();

        dispatch(logout())
        dispatch(deleteAllLogout())

    } 
}


const logout = () => {
    return {
        type: types.logout,
    }
}
