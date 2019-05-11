import React, {Component} from 'react';
import '../App.css';
import BurgerMenu from './BurgerMenu';

class Homepage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className='homepage'>
                <div className='article'>Article</div>
                <div className='article'>Article</div>
                <div className='article'>Article</div>
                <div className='button'>Button</div>
            </div>
        )
    }
}

export default Homepage;
    