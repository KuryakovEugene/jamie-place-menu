import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "firebase/firestore"
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBCLuMuIDzNf5NVoy74dUeqbZHn8INyXJ8",
  authDomain: "jamie-place-menu.firebaseapp.com",
  projectId: "jamie-place-menu",
  storageBucket: "jamie-place-menu.appspot.com",
  messagingSenderId: "34051057904",
  appId: "1:34051057904:web:78c5a91f74311f73937a35",
  measurementId: "G-TJ72L52WM0"
};


export const Context = createContext(null)

const app = initializeApp(firebaseConfig);

const auth = getAuth()
const firestore = getFirestore()


ReactDOM.render(
    <Context.Provider value={{
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);