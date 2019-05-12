import React, {Component} from 'react';
import '../App.css';
import Button from './Button';

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
                <Button />
            </div>
        )
    }
}

export default Homepage;
    