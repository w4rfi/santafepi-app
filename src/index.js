import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyA7cxeukEhgpwgXkR4EzqIhk85gmHVmhNc",
  authDomain: "santadepi-app-4ba58.firebaseapp.com",
  projectId: "santadepi-app-4ba58",
  storageBucket: "santadepi-app-4ba58.appspot.com",
  messagingSenderId: "529696242491",
  appId: "1:529696242491:web:cc82b2ed4aaf9e261a151e"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

