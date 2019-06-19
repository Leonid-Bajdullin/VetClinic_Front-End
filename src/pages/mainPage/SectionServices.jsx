import React, { Component } from 'react';
import '../../App.css';
import Button from '../../components/Button';

class SectionServices extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='section'>
                <div className='grooming'>Grooming</div>
                <div className='diagnostics'>Diagnostics</div>
                <div className='manipulations'>Manipulations</div>
                <a className='button' href='http://localhost:3000/allservices'>All services</a>
            </div>
        )
    }
}

export default SectionServices;