import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/Contact/ContactForm';

const ContactSection = () => {
    return (
        <div className="rs-contact contact-style2 pt-130 pb-130 bg35 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-7">
                        <div className="touch-wrap">
                            <div className="sec-title sec-modify1 mb-40">
                                <span className="sub-text">Get in touch</span>
                                <h2 className="title pb-25">
                                    Get free marketing consultation today
                                </h2>
                                <p className="desc desc2">
                                    Vestibulum lectus mauris ultrices eros in. Cursus sit amet dictum sit amet. Adipiscing tristique risus nec feugiat
                                </p>
                            </div>
                            <ul className="contact-button">
                                <li>
                                    <Link className="readon contact-icon" to="#">
                                        <span className="btn-txt">Contact Us</span>
                                        <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="readon consultant phone-number orange-light" to="/contact-us-1">
                                        <span className="btn-icon">
                                            <i className="fa fa-phone"></i>
                                        </span>
                                        <span className="btn-text">(00) 123 456 789</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
