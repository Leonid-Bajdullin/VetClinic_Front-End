import React, { Component }  from 'react';
import HelperFunctions from '../utils/HelperFunctions';
import serviceReducer from '../reducers/serviceReducer';
import { connect } from 'react-redux';
import getServicePrice from '../actionCreators/serviceActions';
import App from '../App';
import DateTimePicker from 'react-datetime-picker';
import Header from './mainPage/Header';

const jwt = require('jsonwebtoken');

class OrderCreator extends Component {
  constructor(props) {
      super(props);

      this.state = {
        service_type: "Grooming",
        service_name: "Doctor's appointment",
        price: 30,
        worker: 'Markus',
        userId: '',
        start_time: new Date()
      }
  }

  datetimeChange = date => this.setState({ date })

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
        start_time: this.state.startTime,
        userId: this.state.userId,
        token: localStorage.getItem('token')
      },
      'orders/save_order'
    )
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const decoded = jwt.decode(token);
    this.setState({
      userId: decoded.userId
    })
  }

  render() {
    return (
      <div className='order-page'>
        <Header />
        <form className='order-layout'>
          <div style={{fontSize: '40px', display: 'inline-block'}}>
              Create your order please
          </div>
          <div style={{display: 'inline-block'}}>
              <div className='order-inputs'>
              <label htmlFor="service">Choose service</label>
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
              <label htmlFor="worker">Choose worker</label>
              <select className='select-css' name='worker' onChange={this.handleInputChange}>
                  <option value='5d04b328bf7ba2fcbffdf60c'>Markus</option>
                  <option value=''>Amanda</option>
                  <option value=''>Connor</option>
              </select>
              <label htmlFor="datetime">Choose date and time</label>
              <div>
                <DateTimePicker 
                  onChange={this.datetimeChange}
                  value={this.state.date}
                />
              </div>
              </div>
          </div>
          <div style={{fontSize: '30px', display: 'inline-block'}}>
              <span>Total price:</span>
              <span>{this.state.price}</span>
              <button className='button' onClick={this.handleSubmit}>Submit order</button>
          </div>
        </form>
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