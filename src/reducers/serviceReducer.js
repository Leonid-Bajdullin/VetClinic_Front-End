// import getServicePrice from '../actionCreators/getServicePrice';

const serviceReducer = (state = {
  price: 0
  }, action) => {
    if(state === undefined) {
        return {price: 0};
    }
    if(action.type === 'SET_PRICE') {
        state = {
          ...state,
          price: action.payload
        };
    }
    return state;

}

export default serviceReducer;