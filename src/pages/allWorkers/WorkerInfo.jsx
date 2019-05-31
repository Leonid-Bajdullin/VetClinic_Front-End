import React, {Component} from 'react';

function WorkerInfo(props) {
    return (
        <div className='workerspage'>
            <img src={props.src} alt={props.alt}/>
            <div>{props.name}</div>
        </div>
    )
}

export default WorkerInfo;