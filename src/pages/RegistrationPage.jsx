import React, { Component } from 'react';
import FormValidator from '../utils/FormValidator';
import HelperFunctions from '../utils/HelperFunctions';
import 'bootstrap/dist/css/bootstrap.css';

class RegistrationForm extends Component {
  constructor() {
    super();    

// Validator
    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Name is required'
      },
      {
        field: 'lastName',
        method: 'isEmpty',
        validWhen: false,
        message: 'Lastname is required'
      },
      { 
        field: 'email', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Email is required.' 
      },
      { 
        field: 'email',
        method: 'isEmail', 
        validWhen: true, 
        message: 'That is not a valid email.'
      },
      { 
        field: 'phone', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Pleave provide a phone number.'
      },
      {
        field: 'phone', 
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true, 
        message: 'That is not a valid phone number.'
      },
      { 
        field: 'password', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Password is required.'
      },
      { 
        field: 'password_confirmation', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Password confirmation is required.'
      },
      { 
        field: 'password_confirmation', 
        method: this.passwordMatch,   // notice that we are passing a custom function here
        validWhen: true, 
        message: 'Password and password confirmation do not match.'
      }
    ]);

// state
    this.state = {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      validation: this.validator.valid(),
    }

    this.submitted = false;
  }

// functions
  passwordMatch = (confirmation, state) => (state.password === confirmation)

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    
  handleFormSubmit = async(event) => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      // handle actual form submission here
        let savedUser = await HelperFunctions.fetchFunc(
          'POST',
          {
            name: this.state.name,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
          },
          'users/signup'
        )
      }
  }
  // if the form has been submitted at least once, then check validity every time we render, otherwise just use what's in state
  
  // rendering
  render() {
    let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
    return (
      <form className="demoForm">
        <h2>Sign up</h2>

        <div className={validation.name.isInvalid ? 'has-error' : undefined}>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control"
            name="name"
            placeholder="Enter your Name please"
            onChange={this.handleInputChange}
          />
          <span className="help-block">{validation.name.message}</span>
        </div>

        <div className={validation.lastName.isInvalid ? 'has-error' : undefined}>
          <label htmlFor="lastName">Lastname</label>
          <input type="text" className="form-control"
            name="lastName"
            placeholder="Enter your Lastname please"
            onChange={this.handleInputChange}
          />
          <span className="help-block">{validation.lastName.message}</span>
        </div>

        <div className={validation.email.isInvalid ? 'has-error' : undefined}>
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control"
            name="email"
            placeholder="john@doe.com"
            onChange={this.handleInputChange}
          />
          <span className="help-block">{validation.email.message}</span>
        </div>

        <div className={validation.email.isInvalid ? 'has-error' : undefined}>
          <label htmlFor="phone">Phone</label>
          <input type="phone" className="form-control"
            name="phone"
            placeholder="(xxx)xxx-xxxx"
            onChange={this.handleInputChange}
          />
          <span className="help-block">{validation.phone.message}</span>
        </div>

        <div className={validation.email.isInvalid ? 'has-error' : undefined}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control"
            name="password"
            onChange={this.handleInputChange}
          />
          <span className="help-block">{validation.password.message}</span>
        </div>

        <div className={validation.email.isInvalid ? 'has-error' : undefined}>
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input type="password" className="form-control"
            name="password_confirmation"
            onChange={this.handleInputChange}
          />
          <span className="help-block">{validation.password_confirmation.message}</span>
        </div>

        <button onClick={this.handleFormSubmit} className="btn btn-primary">
          Sign up
        </button>
      </form>
    )
  }
}


export default RegistrationForm;