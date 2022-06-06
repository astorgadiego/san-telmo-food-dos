import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrtm5_PTlLritw4Im-xhY7b0vorMUXFC0",
  authDomain: "react-d5fbf.firebaseapp.com",
  projectId: "react-d5fbf",
  storageBucket: "react-d5fbf.appspot.com",
  messagingSenderId: "778369973994",
  appId: "1:778369973994:web:fd664823a3a2c60959a193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


