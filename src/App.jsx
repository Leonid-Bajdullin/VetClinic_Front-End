import React, { Component } from 'react';

import {Router, Route, Switch, Link} from 'react-router-dom';
// ==============================COMPONENTS==========================
import './App.css';
import MainPage from './pages/MainPage';
import AllServices from './pages/AllServices';
import AllWorkers from './pages/AllWorkers';
import RegistrationForm from './pages/RegistrationPage';
import OrderCreator from './pages/OrderCreator';
import history from './history';
// ==================================================================

class App extends Component {
  constructor(props) {
    super(props);
  }

  // REACT
  render() {
    return (
      <MainPage />
    )
  }

  // REDUX
  // render() {
  //   return (
  //     <Router history={history}>
  //       <Switch>
  //         <Route exact path="/" component={MainPage} />
  //         <Route path='/registration' component={RegistrationForm} />
  //         <Route path="/allservices" component={AllServices} />
  //         <Route path="/allworkers" component={AllWorkers} />
  //         <Route path="/createorder" component={OrderCreator} />
  //       </Switch>
  //     </Router>
  //   );
  // }
}

// ======================================================================
export default App;
