import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Game from './pages/mainGame';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <AppRoutes />,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
