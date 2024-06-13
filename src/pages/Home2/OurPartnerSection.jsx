import React from 'react';
import Partner from '../../components/Partner/Partner';
import { Link } from 'react-router-dom';

const OurPartnerSection = ({ logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12 }) => {
    const partnerLogos = [
        { src: logo1, alt: 'Partner 1' },
        { src: logo2, alt: 'Partner 2' },
        { src: logo3, alt: 'Partner 3' },
        { src: logo4, alt: 'Partner 4' },
        { src: logo5, alt: 'Partner 5' },
        { src: logo6, alt: 'Partner 6' },
        { src: logo7, alt: 'Partner 7' },
        { src: logo8, alt: 'Partner 8' },
        { src: logo9, alt: 'Partner 9' },
        { src: logo10, alt: 'Partner 10' },
        { src: logo11, alt: 'Partner 11' },
        { src: logo12, alt: 'Partner 12' },
    ];

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
                                {
                                    partnerLogos.map((logo, index) => (
                                        <Partner key={index} logo={logo} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartnerSection;