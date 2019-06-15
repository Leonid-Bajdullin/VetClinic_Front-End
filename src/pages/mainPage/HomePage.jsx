import React, {Component} from 'react';
import '../../App.css';
import LoginBar from './homePage/LoginBar';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className='homepage'>
                <LoginBar className='loginbar'/>
                <Link to='/createorder' className='button'>Make an order</Link>
            </div>
        )
    }
}

export default HomePage;
    