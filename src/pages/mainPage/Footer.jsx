import React, { Component } from 'react';
import '../../App.css';

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='footer'>
                <div>Logos</div>
                <div>Contact Us</div>
                <div>Copyright</div>
            </div>
        )
    }
}

export default Footer;