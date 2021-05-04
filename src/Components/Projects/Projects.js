import React from 'react';
import './Projects.css'
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';


const Projects = () => {
    return (
        <section className="row m-auto d-flex justify-content-evenly mt-5">
            <h4 className="text-white mb-5 text-center"><span className="borders">Some Of my Projects</span></h4>
            <div className="col-md-4 ms-1 mb-4 padding">
                <Fade left>
                    <div className="card">
                        <img id="projectId" className="img-fluid card-img-top" src="https://i.ibb.co/dkvXgwf/phone.png" alt="" />
                        <div id="card-id" className="card-body text-white">
                            <h5 className="card-title">Phone Repair service</h5>
                            <p>A full stact single page phone service web application.</p>
                            <ul>
                                <li>specific user order & show user order details</li>
                                <li> using firebase authentication method</li>
                                <li>separate user and admin dashboard </li>
                                <li>admin can control dashboard</li>
                            </ul>
                            <div>
                                <p><small className="tech me-2">React js</small> <small className="tech bg-dark me-2">Node Js</small> <small className="tech me-2 "> MongoDb</small></p>
                                <p> <small className="tech me-2 ">React Router</small> <small className="tech bg-dark">Bootstrap5</small> <span className="tech me-2">Firebase</span></p>
                            </div>
                        </div>
                        <div class="card-footer footer">
                            <a className="footer-icon" href="https://github.com/jrwdmamun825/phone-repair-services" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                            <a className="footer-icon" href="https://phone-repair-a63c6.web.app/" target="_blank"> <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></a>

                        </div>
                    </div>
                </Fade>

            </div>
            <div className="col-md-4 ms-1 mb-4 padding">
                <Fade right>
                    <div className="card">
                        <div>
                            <img id="projectId" className="img-fluid card-img-top" src="https://i.ibb.co/Fx48Jr7/bookstroe.png" alt="" />
                        </div>
                        <div id="card-id" className="card-body text-white">
                            <h5 className="card-title">Book Store Online</h5>
                            <p>A full stact single page online Book store.</p>
                            <ul>
                                <li>data load from mongodb database</li>
                                <li>specific user order , details & payment info</li>
                                <li>using firebase authentication method</li>
                                <li>using spinner method when data load from mongodb</li>
                            </ul>

                            <div>
                                <p><small className="tech me-2 bg-dark">React js</small> <small className="tech me-2">Node Js</small> <small className="tech me-2 bg-dark"> MongoDb</small> </p> <p> <small className="tech me-2">React Router</small>
                                <small className="tech bg-dark">Bootstrap5</small> <span className="tech me-2">Firebase</span></p>
                            </div>
                        </div>
                        <div class="card-footer footer">
                            <a className="footer-icon" href="https://github.com/jrwdmamun825/book-stores-client" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                            <a className="footer-icon" href="https://book-store-7c419.web.app/" target="_blank"> <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></a>

                        </div>

                    </div>
                </Fade>

            </div>
            <div className="col-md-4 ms-1 mb-4 padding">
                <Fade left>
                    <div className="card">
                        <div>
                            <img id="projectId" className="img-fluid card-img-top" src="https://i.ibb.co/sypybKd/tickettravel.png" alt="" />
                        </div>
                        <div id="card-id" className="card-body text-white">
                            <h5 className="card-title">Ticket Travel</h5>
                            <p>Simpl Frontend react base Ticket Travel web application.</p>
                            <div>
                                <p><small className="tech me-2">React js</small> <small className="tech me-2 bg-dark">React Router</small>
                                    <small className="tech">Bootstrap5</small> <small className="tech me-2 bg-dark">Firebase</small></p>
                            </div>
                        </div>
                        <div class="card-footer footer">
                            <a className="footer-icon" href="" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                            <a className="footer-icon" href="https://ticket-travel.web.app/" target="_blank"> <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></a>

                        </div>
                    </div>
                </Fade>
            </div>
            <div className="col-md-4 ms-1 mb-4 padding">
                <Fade right>
                    <div className="card">
                        <div>
                            <img id="projectId" className="img-fluid" src="https://i.ibb.co/8sNJSWw/panguenfashion.png" alt="" />
                        </div>
                        <div id="card-id" className="card-body text-white">
                            <h5 className="card-title">Panguen Fashion</h5>
                            <p>Simple Html , css and bootstrap5 shopping websites.</p>
                            <p><small className="tech me-2 ">Html</small> <small className="tech me-2 bg-dark">Css3</small>
                                <small className="tech">Bootstrap5</small></p>
                        </div>
                        <div class="card-footer footer">
                            <a className="footer-icon" href="https://github.com/jrwdmamun825/responsive-shopping-website" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                            <a className="footer-icon" href="https://jrwdmamun825.github.io/responsive-shopping-website/" target="_blank"> <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></a>

                        </div>
                    </div>
                </Fade>
            </div>
            <div>

            </div>
            <div className="text-center mt-5">
                <a className="icons" href=""> <FontAwesomeIcon icon={faGithub} /></a>
                <a className="icons" href=""> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="icons" href=""> <FontAwesomeIcon icon={faFacebook} /></a>
            </div>


        </section>
    );
};

export default Projects;