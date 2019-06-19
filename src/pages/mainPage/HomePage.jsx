import React, {Component} from 'react';
import '../../App.css';
import LoginBar from './homePage/LoginBar';

class HomePage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className='homepage'>
                <LoginBar className='loginbar'/>
            </div>
        )
    }
}

export default HomePage;
    