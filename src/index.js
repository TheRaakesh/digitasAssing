import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import bootstrap from '.bootstrap/dist';
import 'font-awesome/css/font-awesome.css';
// import 'font-awesome/css/all.css'
import { library } from '@fortawesome/fontawesome-free';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/tab';
import './fontaw'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
