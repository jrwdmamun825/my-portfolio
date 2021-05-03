import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Projects from '../Projects/Projects';
import './Home.css';
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div id="homemain">
            <Fade left>
                <HeaderMain></HeaderMain>
            </Fade>
        </div>
    );
};

export default Home;