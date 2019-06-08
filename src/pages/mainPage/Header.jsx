import React, { Component } from 'react';
import BurgerMenu from '../../components/BurgerMenu';
import Input from '../../components/Input';
import '../../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='header'>
                <BurgerMenu />
                <a href="http://localhost:3000" className='title'>Title</a>
                <Input className='search' placeholder='Search'></Input>
            </div>
        )
    }
}

export default Header;