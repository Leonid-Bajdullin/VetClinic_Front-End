import React from 'react';
// =============================PACKAGES=================================
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
// ============================FILES & COMPONENTS========================
import App from './App';
import MainPage from './pages/MainPage';
import AllServices from './pages/AllServices';
import AllWorkers from './pages/AllWorkers';
import RegistrationForm from './pages/RegistrationPage';
import OrderCreator from './pages/OrderCreator';
import history from './history';
import './index.css';
import store from "./store";
import * as serviceWorker from './serviceWorker';
// ==============================REACT=======================================

const routing = (
<Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path='/registration' component={RegistrationForm} />
        <Route path="/allservices" component={AllServices} />
        <Route path="/allworkers" component={AllWorkers} />
        <Route path="/createorder" component={OrderCreator} />
      </Switch>
</Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// ==============================REDUX========================================
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('root'));


serviceWorker.unregister();
