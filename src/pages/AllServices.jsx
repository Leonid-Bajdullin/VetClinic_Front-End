import React, {Component} from 'react';
import '../App.css'
import Header from './mainPage/Header';

function AllServices() {
    return(
        <div>
            <Header />
            <div className='servicepage'>
                <div>Diagnostics</div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        {/* <th>Employee</th> */}
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Doctor's appointment</td>
                        <td>Visit doctor to tell about your problems, to make a diagnosis and list further treatment</td>
                        <td>30 min</td>
                        {/* <td>Dr. Amanda Fisher</td> */}
                        <td>30$</td>
                    </tr>
                </table>
            </div>
            <div className='servicepage'>
                <div>Grooming</div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        {/* <th>Employee</th> */}
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Complex grooming</td>
                        <td>All the services of grooming at once (bathing, haircut, claw clipping, ear cleaning, teeth cleaning)</td>
                        <td>3 hours</td>
                        {/* <td>Marcus</td> */}
                        <td>60$</td>
                    </tr>
                    <tr>
                        <td>Bathing</td>
                        <td>Bathing in a warm water with shampoo, drying</td>
                        <td>30 min</td>
                        {/* <td>Marcus</td> */}
                        <td>10$</td>
                    </tr>
                    <tr>
                        <td>Haircut</td>
                        <td>Cutting hair with a trimmer, pulling out old hair (also between the claws)</td>
                        <td>1 hour 30 min</td>
                        {/* <td>Marcus</td> */}
                        <td>30$</td>
                    </tr>
                    <tr>
                        <td>Claw clipping</td>
                        <td>Clipping the claws with a clipper</td>
                        <td>20 min</td>
                        {/* <td>Marcus</td> */}
                        <td>10$</td>
                    </tr>
                    <tr>
                        <td>Ear cleaning</td>
                        <td>Cleaning the ears with an ear stick</td>
                        <td>10 min</td>
                        {/* <td>Marcus</td> */}
                        <td>5$</td>
                    </tr>
                    <tr>
                        <td>Teeth cleaning</td>
                        <td>Cleaning teeth with a brush</td>
                        <td>15 min</td>
                        {/* <td>Marcus</td> */}
                        <td>15$</td>
                    </tr>
                </table>
            </div>
            <div className='servicepage'>
                <div>Manipulations</div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        {/* <th>Employee</th> */}
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Blood test</td>
                        <td>Blood sampling to analyze your pet's blood composition</td>
                        <td>15 min</td>
                        {/* <td>Dr. Connor McGuee</td> */}
                        <td>20$</td>
                    </tr>
                    <tr>
                        <td>Vaccination</td>
                        <td>Vaccination from different infections</td>
                        <td>15 min</td>
                        {/* <td>Dr. Connor McGuee</td> */}
                        <td>40$</td>
                    </tr>
                    <tr>
                        <td>Surgery</td>
                        <td>Operative intervention for different purposes</td>
                        <td>Depends on complexity</td>
                        {/* <td>Dr. Connor McGuee</td> */}
                        <td>from 200$</td>
                    </tr>
                    <tr>
                        <td>Sonography</td>
                        <td>Checking for ilnesses with ultrasound</td>
                        <td>30 min</td>
                        {/* <td>Dr. Connor McGuee</td> */}
                        <td>70$</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AllServices;