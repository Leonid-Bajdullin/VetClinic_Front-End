import React, {Component} from 'react';
import '../../App.css';
import Button from '../../components/Button';

class HomePage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className='homepage'>
                <div className='article'>Article</div>
                <div className='article'>Article</div>
                <div className='article'>Article</div>
                <Button>Make an order</Button>
            </div>
        )
    }
}

export default HomePage;
    