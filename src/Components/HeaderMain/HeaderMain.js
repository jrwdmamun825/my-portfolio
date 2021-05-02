import React from 'react';
import Typewriter from 'typewriter-effect';
import './HeaderMain.css';
import Fade from 'react-reveal/Flip';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const HeaderMain = () => {
    return (
        <div id="headerMain" className="row mt-5 d-flex justify-content-center m-auto">
            {/* <div className="col-md-7">
                <Fade top>
                    <img className="img-fluid w-75" src="https://i.ibb.co/Kxxgh66/mypic-crop.png" />
                </Fade>
            </div> */}
            <div className="col-md-5 col-sm-12 text-white ">
                <Fade right>
                    <h6>Hello ,</h6>
                    <h1 >I'm Abdullah <span className="name">Mamun</span></h1>
                </Fade>
                <div>
                    <div className="d-flex">
                        <div >
                            <h5>I am a</h5>
                        </div>
                        <div className="ms-2">
                            <h5 className="">
                                <small className="type">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Programmer')
                                                .callFunction(() => {
                                                    console.log('String typed out!');
                                                })
                                                .pauseFor(2500)
                                                .deleteAll()
                                            typewriter.typeString('Frontend Developer')
                                                .callFunction(() => {
                                                    console.log('All strings were deleted');
                                                })
                                                .start();
                                        }}
                                    />
                                </small>
                            </h5>
                        </div>

                    </div>
                    <p className="text-white">A self-motivated and enthusiastic web developer with a deep interest in JavaScript & react js.I like to code things from srcatch and enjoy bringing ideas to life in the browser</p>
                    <Link id="about" className="btn btn-brand text-white text-decoration-none" to="/about">About me</Link>
                    <a id="about" className="text-decoration-none btn btn-brand text-white ms-5 download" href="https://cutt.ly/2bl0JaL">
                    <FontAwesomeIcon icon={faDownload} />
                        <span className="ms-2">download resume</span>
                    </a>
                </div>
            </div>
            <div className="text-center">
                <a className="icons" href=""> <FontAwesomeIcon icon={faGithub} /></a>
                <a className="icons" href=""> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="icons" href=""> <FontAwesomeIcon icon={faFacebook} /></a>
                <h6 className="text-white mt-2"> <FontAwesomeIcon icon={faEnvelope} /> abdullah.mamun.0110@gmail.com</h6>
            </div>
        </div>
    );
};

export default HeaderMain;