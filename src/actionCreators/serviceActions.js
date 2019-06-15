import HelperFunctions from "../utils/HelperFunctions";
import ActionButton from "antd/lib/modal/ActionButton";

export default function getServicePrice() {
  return async (dispatch) => {
    let result = await HelperFunctions.fetchFunc(
      'POST',
      {
        service: this.state.service,
      },
      'services/check_price'
    )
    dispatch({
      type: 'SET_PRICE',
      payload: result[0].price
    })
  }
}