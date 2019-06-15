// import getServicePrice from '../actionCreators/getServicePrice';

const serviceReducer = (state = {
  price: 0
  }, action) => {
    if(state === undefined) {
        return {price: 0};
    }
    if(action.type === 'SET_PRICE') {
        var newState = {
          ...state,
          price: action.payload
        };
        return newState;
    }
   
    return state;
}

export default serviceReducer;