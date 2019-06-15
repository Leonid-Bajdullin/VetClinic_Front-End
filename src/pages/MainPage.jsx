import React, {Component} from 'react';
import Header from './mainPage/Header';
import HomePage from './mainPage/HomePage';
import SectionServices from './mainPage/SectionServices';
import SectionWorkers from './mainPage/SectionWorkers';
import Footer from './mainPage/Footer';
import '../App.css';


class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="mainpage">
                <Header />
                <HomePage />
                <SectionServices />
                <SectionWorkers />
                <Footer />
            </div>
        )
    }
}

export default MainPage;