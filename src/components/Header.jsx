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
                <div className='title'>Title</div>
                <div className='grid-element'>Search</div>
            </div>
        )
    }
}

export default Header;