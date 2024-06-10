import React from 'react';
import { Link } from 'react-router-dom';

const Partner = ({ partnerLogos }) => {
    return (
        <div className="rs-partner partner-style2 partner-modify5 bg29 pt-130 pb-130 md-pt-80 md-pb-80">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-5 pr-50 md-pr-15 md-mb-50">
                        <div className="sec-title">
                            <h2 className="title title11 pb-24">
                                We partnered with 1k+ companies
                            </h2>
                            <p className="desc desc8 pb-35">
                                Quickly aggregate B2B users and worldwide in potential your data. Progressively plagiarize resource-leveling e-commerce business data services.
                            </p>
                            <div className="btn-part">
                                <Link className="readon consultant get-yellow blue-light" to="/contact-us-1">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="partner-wrap">
                            <div className="row no-gutters">
                                {partnerLogos.map((logo, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-6 logo-grid-item">
                                        <div className="partner-item">
                                            <div className="logo-img">
                                                <Link to="https://rstheme.com">
                                                    <img className="hovers-logos" src={logo.src} alt={logo.alt} />
                                                    <img className="mains-logos" src={logo.src} alt={logo.alt} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;