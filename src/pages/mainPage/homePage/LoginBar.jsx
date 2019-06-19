import React, {Component} from 'react';
import HelperFunctions from '../../../utils/HelperFunctions';
import {Link} from'react-router-dom';
// import history from '../../../history';

class LoginBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      name: 'Leo'
    }
  }

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSignIn = async(event) => {
    event.preventDefault();

    let userData = await HelperFunctions.fetchFunc(
      'POST',
      {
        email: this.state.email,
        password: this.state.password
      },
      'users/signin'
    )
    localStorage.setItem("token", userData.token);
    if(userData.success === true) {
      this.setState(prevState => ({
        isLoggedIn: !prevState.isLoggedIn,
        name: userData.name
      }));
    } else {
      alert('Wrong credentials!');
    }
  }

  // componentWillUnmount() {
  //   localStorage.removeItem("token");
  // }

  render() {
    if(this.state.isLoggedIn===true) {
      return (
        <div className={this.props.className}>
          <div>Hello, {this.state.name}</div>
          <button>Sign out</button>
          <Link to='/createorder' className='button'>Make an order</Link>
        </div> 
      )
    }
    else {
      return(
        <div className={this.props.className}>
          <input 
            name='email'
            onChange={this.handleInputChange} 
            type='text' 
            placeholder='Enter your email' 
          ></input>
          <input 
            name='password'
            onChange={this.handleInputChange} 
            type='password' 
            placeholder='Enter your password'
          ></input>
          <button onClick={this.handleSignIn}>Sign in</button>
          <a href='http://localhost:3000/registration'>Register now</a>
        </div>
      )
    }
  }
}

export default LoginBar;

