import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import serviceReducer from './reducers/serviceReducer';

const store = createStore(
  combineReducers({
      serviceReducer: serviceReducer
  }), 
  applyMiddleware(thunk)
);

export default store;