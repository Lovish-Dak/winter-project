// import React from 'react';
// import ReactDOM from 'react-dom';

// import { BrowserRouter as Router } from "react-router-dom";


//import { Provider } from "react-redux";
// import { StateProvider } from './Redux/StateProvider'
// import reducer, { initialState } from './Redux/reducer'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Redux/StateProvider';
import reducer, { initialState } from './Redux/reducer';

//import { ConfigureStore } from "./Redux/ConfigureStore";

//const store = ConfigureStore();


ReactDOM.render(
  <React.StrictMode>

    <StateProvider initialState={initialState} reducer={reducer}>

      <App />
    </StateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
