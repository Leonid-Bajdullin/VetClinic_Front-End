import React, {Component} from 'react';
import HelperFunctions from '../../../utils/HelperFunctions';
// import history from '../../../history';

class LoginBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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
      'users/login'
    )
  }
  
  // onSubmit = () => {
  //   this.props.history.push('/')
  // }

  render() {
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

export default LoginBar;

