import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDIC1_ErXmwON_gFGP82xe6mnKHfrSfJFI",
    authDomain: "olxx-5781d.firebaseapp.com",
    projectId: "olxx-5781d",
    storageBucket: "olxx-5781d.appspot.com",
    messagingSenderId: "564477177483",
    appId: "1:564477177483:web:b12327831963d7ac6aee8e",
    measurementId: "G-FG9W230ZTC"
  };

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};