import React from 'react';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/start/index';
import Guide from './pages/guide';
import Game from './pages/mainGame';



export default function AppRoutes() {
    return (
        <BrowserRouter>
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>In</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>

            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />

            </head>
            
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/guide' component={Guide} />
                <Route path='/game' component={Game} />
                <Route path='/game/character'  component={Game} />
            </Switch>
        </BrowserRouter>
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
