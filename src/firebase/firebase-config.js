import firebase from "firebase/app";
import "firebase/firestore"
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDgpf4GCtC8auXRSAemlV3LsBqs1HRsY94",
    authDomain: "react-app-cursos-4b896.firebaseapp.com",
    projectId: "react-app-cursos-4b896",
    storageBucket: "react-app-cursos-4b896.appspot.com",
    messagingSenderId: "868477127572",
    appId: "1:868477127572:web:946efc22b7ffcf136fdd81"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();  //conexion con firebase
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); //conexion con las autenticacion de firebase 

export {
    database,
    googleAuthProvider,
    firebase
}