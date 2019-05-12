import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='header'>
                <BurgerMenu />
                <a href="https://www.w3schools.com" className='title'>Title</a>
                <div>Search</div>
            </div>
        )
    }
}

export default Header;