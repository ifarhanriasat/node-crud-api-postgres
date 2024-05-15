// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTz5TyRxrIQqvjPHOzJh6tMQeH2m_zEhw",
  authDomain: "crud-apis-39cfd.firebaseapp.com",
  projectId: "crud-apis-39cfd",
  storageBucket: "crud-apis-39cfd.appspot.com",
  messagingSenderId: "591105718504",
  appId: "1:591105718504:web:efcc1898f538bb3ad6715d",
  measurementId: "G-DEW0RG8TFY"
};


// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
export const auth = getAuth(firebase_app);
