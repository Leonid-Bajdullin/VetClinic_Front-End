import React, {Component} from 'react';
import Header from './mainPage/Header';
import LoginPage from './LoginPage';
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
                <LoginPage />
                <HomePage />
                <SectionServices />
                <SectionWorkers />
                <Footer />
            </div>
        )
    }
}

export default MainPage;