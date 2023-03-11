import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {ToDo} from './components/ToDo';  //import-ujemo ovde 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToDo/>
  </React.StrictMode>
);


