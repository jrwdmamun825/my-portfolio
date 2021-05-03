import { faFacebook, faGithub, faLinkedin, faNode } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCheckSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css'
const About = () => {
    return (
        <section className="section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 m-auto">
                    <div className="shape ms-3">
                        <img className="img-fluid w-75 ms-5 mt-3" src="https://i.ibb.co/Tg23YYh/my-pic-removebg-preview-2.png" alt="" />
                    </div>
                    <div className="container mt-3">
                        <h1 className="about-name">I'm Abdullah Mamun</h1>
                        <p className="text-white m-auto">A self-motivated and enthusiastic web developer with a deep interest in JavaScript & react js.I like to code things from srcatch and enjoy bringing ideas to life in the browser.</p>
                    </div>
                </div>
                <div className="col-md-5 mt-4 ms-3">
                    <h2 className="skill-color">My Programming Skill</h2>
                    <div className="text-white">
                        <h5>I'm comfortable with:</h5>
                        <ul className="list-unstyled styled">
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />Html5</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />css3</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />Bootstrap5</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />Javascript</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />Es6</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />React js</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />React Router</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />Firebase</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />Node Js</li>
                            <li><FontAwesomeIcon className="text-success me-5" icon={faCheckSquare} />MongoDb</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h2 className="familar">Familiar :</h2>
                        <h5 className="text-secondary"><small>React Native, Sass, Metarial-Ui</small></h5>

                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <a className="icons" href=""> <FontAwesomeIcon icon={faGithub} /></a>
                <a className="icons" href=""> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="icons" href=""> <FontAwesomeIcon icon={faFacebook} /></a>
                <h6 className="text-white mt-2"> <FontAwesomeIcon icon={faEnvelope} /> abdullah.mamun.0110@gmail.com</h6>
            </div>
        </section>
    );
};

export default About;