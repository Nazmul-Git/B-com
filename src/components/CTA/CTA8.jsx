import React from 'react';
import { Link } from 'react-router-dom';

const CTA8 = () => {
    return (
        <div className="rs-cta cta-style4">
            <div className="container custom13">
                <div className="cta-widget-wrap">
                    <div className="sec-title text-center">
                        <h2 className="title white-color pb-22">
                            Join Us today and let us help you to<br />
                            grow your business.
                        </h2>
                        <p className="desc desc2">
                            Mauris sit amet massa vitae tortor condimentum orci phasellus egestas tellus
                        </p>
                        <ul className="cta-btn-wrap mt-45">
                            <li>
                                <Link className="readon cta-btn phn-text cta-yellow2" to="/contact-us-1">
                                    <span className="btn-icon">
                                        <i className="fa fa-phone"></i>
                                    </span>
                                    <span className="btn-text">(00) 123 456 78</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="readon cta-btn contact cont-yellow2" to="/contact-us-1">
                                    <span className="btn-text">Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA8;
