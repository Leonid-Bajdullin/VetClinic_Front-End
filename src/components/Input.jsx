import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <input className={this.props.className} placeholder={this.props.placeholder}></input>
        )
    }
}

export default Input;