
// =============================PACKAGES=================================
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

// ============================FILES & COMPONENTS========================
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import AllServices from './pages/AllServices';
import AllWorkers from './pages/AllWorkers';

// =========================================================================
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/allservices" component={AllServices} />
            <Route path="/allworkers" component={AllWorkers} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
