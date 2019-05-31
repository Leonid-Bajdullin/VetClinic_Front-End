import React, {Component} from 'react';
import WorkerInfo from './allWorkers/WorkerInfo'
import markus from '../images/avatars_markus.jpg';
import connor from '../images/avatars_connor.jpg';
import amanda from '../images/avatars_amanda.jpg';

const android = {
    name: 'Markus',
    src: markus,
    alt: 'Markus'
}

function AllWorkers() {
    return(
        <div>
            <div className='workerspage'>
                <img src={markus} alt='Markus'/>
                <table>
                    <tr>
                        <th>Name</th>
                        <td>Markus</td>
                    </tr>
                    <tr>
                        <th>Services</th>
                        <td>Grooming</td>
                    </tr>
                    <tr>
                        <th>About</th>
                        <td>Android leader</td>
                    </tr>
                </table>
            </div>
            <div className='workerspage'>
                <img src={connor} alt='Connor'/>
                <table>
                    <tr>
                        <th>Name</th>
                        <td>Connor</td>
                    </tr>
                    <tr>
                        <th>Services</th>
                        <td>Manipulations</td>
                    </tr>
                    <tr>
                        <th>About</th>
                        <td>Android detective</td>
                    </tr>
                </table>
            </div>
            <div className='workerspage'>
                <img src={amanda} alt='Amanda'/>
                <table>
                    <tr>
                        <th>Name</th>
                        <td>Amanda</td>
                    </tr>
                    <tr>
                        <th>Services</th>
                        <td>Diagnostics</td>
                    </tr>
                    <tr>
                        <th>About</th>
                        <td>Android traitor</td>
                    </tr>
                </table>
            </div>
            <WorkerInfo {...android}/>
        </div>
    )
}

export default AllWorkers;