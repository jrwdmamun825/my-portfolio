import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="row contact-details">
                <div className="col-md-12 contact-title">
                    <h3 className="text-center text-white text-font">Contact</h3>
                </div>
                <div className="col-md-6 mt-2">
                    <h5 className="ms-2">Get in <span className="touchs-color">Touch</span></h5>
                    <div className="ms-2 col-md-12">
                        <h6 className="mt-4"><FontAwesomeIcon icon={faLocationArrow} /> <span className="ms-1">chittagong,Bangladesh</span></h6>
                        <h6 className="mt-4"><FontAwesomeIcon icon={faEnvelope} /> <span className="ms-1">abdullah.mamun.0110@gmail.com</span></h6>
                        <h6 className="mt-4 "><FontAwesomeIcon icon={faPhone} /> <span className="ms-1 ">+8801875273061</span></h6>
                    </div>
                </div>

                <div className="col-md-5 mt-2">
                    <h5>contact <span className="touchs-color">Form</span></h5>
                    <form  action="https://formspree.io/abdullah.mamun.0110@gmail.com" method="post">
                        <div className="form-group">
                            <input className="form-control w-75 mt-3" placeholder="Your name" type="text" />
                        </div>
                        <div className="form-group">
                            <input className="form-control w-75 mt-3" placeholder="" type="text" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control w-75 mt-3" name="meassage" id="" cols="30" rows="5" placeholder="Your Meassage"></textarea>
                        </div>
                        <input type="submit" value="send" className="btn btn-brand w-75 send mt-3 text-white"/>
                       


                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;