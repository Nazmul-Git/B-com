import React from 'react';
import { Link } from 'react-router-dom';
import ChecklistItem from '../../components/Features/ChecklistItem';

const AboutSection = ({ image, title, description }) => {
    const features = [
        ["We Can Save You Money", "Fast and easy to application"],
        ["No brokers, no upselling", "Our Insurance is Flexible"],
    ];

    return (
        <div className="rs-about about-style3 about-modify3">
            <div className="row no-gutters">
                <div className="col-lg-7">
                    <div className="feature-provide">
                        <div className="sec-title">
                            <span className="sub-text sub-text2">About Us</span>
                            <h2 className="title pb-27">{title}</h2>
                            <p className="desc desc8 pb-25">{description}</p>
                            <ul className="row check-lists check-list10">
                                {features.map((featureGroup, index) => (
                                    <li className="col-lg-6" key={index}>
                                        {featureGroup.map((feature, idx) => (
                                            <ChecklistItem
                                                key={idx}
                                                text={feature}
                                            />
                                        ))}
                                    </li>
                                ))}
                            </ul>
                            <div className="btn-part mt-40">
                                <Link className="readon consultant discover learn-more" to="/about-us">
                                    <span className="btn-text">Learn More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 feature-woman">
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
