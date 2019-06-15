import React, { Component }  from 'react';
import HelperFunctions from '../utils/HelperFunctions';
import serviceReducer from '../reducers/serviceReducer';
import { connect } from 'react-redux';
import getServicePrice from '../actionCreators/serviceActions';
import App from '../App';

class OrderCreator extends Component {
  constructor(props) {
      super(props);

      this.state = {
        service_type: "Grooming",
        service_name: "Doctor's appointment",
        price: 30,
        worker: 'Markus',
        startTime: 9
      }
  }

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleServiceChange = async (event) => {
    this.setState({
      service_name: event.target.value,
    });

    const result = await HelperFunctions.fetchFunc(
      'POST',
    {
      service: event.target.value,
    },
    'services/check_price'
    )
    console.log(result);
    if(result[0]===undefined) {
      this.setState({
        price: 0
      })
    }
    else {
      this.setState({
      price: result[0].price
      })
    }
  }

  handleSubmit = async (event) => {
    await HelperFunctions.fetchFunc(
      'POST',
      {
        service: this.state.service_name,
        price: this.state.price,
        worker: this.state.worker,
        startTime: this.state.startTime
      },
      'orders/save_order'
    )
  }

  render() {
    return (
      <div className='order-page'>
        <div className='order-layout'>
          <div style={{fontSize: '40px', display: 'inline-block'}}>
              Create your order please
          </div>
          <div style={{display: 'inline-block'}}>
              <div className='order-inputs'>
              <select className='select-css' name='service_type' onChange={this.handleInputChange}>
                  <option value='value'>Grooming</option>
                  <option>Diagnostics</option>
                  <option>Manipulations</option>
              </select>
              <select className='select-css' name='service_name' onChange={this.handleServiceChange.bind(this)}>
                  <option>Doctor's appointment</option>
                  <option>Complex grooming</option>
                  <option>Bathing</option>
                  <option>Haircut</option>
                  <option>Claw clipping</option>
                  <option>Manipulations</option>
                  <option>Ear cleaning</option>
                  <option>Teeth cleaning</option>
                  <option>Blood test</option>
                  <option>Vaccination</option>
                  <option>Surgery</option>
                  <option>Sonography</option>
              </select>
              <select className='select-css' name='worker' onChange={this.handleInputChange}>
                  <option value='5d04b328bf7ba2fcbffdf60c'>Markus</option>
                  <option value=''>Amanda</option>
                  <option value=''>Connor</option>
              </select>
              <select className='select-css' name='date'>
                  <option>today</option>
                  <option>tomorrow</option>
                  <option>after tomorrow</option>
              </select>
              <select className='select-css' name='startTime' onChange={this.handleInputChange}>
                  <option>9.00</option>
                  <option>10.00</option>
                  <option>11.00</option>
              </select>
              </div>
          </div>
          <div style={{fontSize: '30px', display: 'inline-block'}}>
              <span>Total price:</span>
              <span>{this.state.price}</span>
              <button className='button' onClick={this.handleSubmit}>Submit order</button>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderCreator;

// REDUX

// const mapStateToProps = (state) => {
//   return {
//     price: state.price
//   }
// };

// const mapDispatchToProps = {
//   setPrice: getServicePrice
// }

// export default connect(mapStateToProps, mapDispatchToProps)(OrderCreator);