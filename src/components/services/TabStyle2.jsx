import React from 'react';
import { Link } from 'react-router-dom';

const TabStyle2 = ({servicesData}) => {
    return (
        <div className="rs-services services-style6 bg26 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-7">
                        <div className="sec-title">
                            <h2 className="title title11">
                                One of the fastest ways to gain business success
                            </h2>
                        </div> 
                    </div>
                    <div className="col-lg-5 md-mb-50">
                        <div className="btn-part text-right md-left">
                            <Link className="readon consultant get-yellow blue-light" to="services-style-1.html">View Services</Link>
                        </div>
                    </div>
                </div>  
                <div className="row">
                    {servicesData.map(service => (
                        <div key={service.id} className="col-xl-4 col-md-6 mb-20">
                            <div className="services-item">
                                <div className="services-wrap">
                                    <div className="services-icon">
                                        <img src={service.image} alt="service" />
                                    </div>
                                    <div className="numbering">{service.id.toString().padStart(2, '0')}</div>
                                    <div className="services-content">
                                        <h6 className="title">
                                            <Link to={service.link}>{service.title}</Link>
                                        </h6>
                                        <p className="services-txt">{service.description}</p>
                                        <div className="services-button ser-btn4">
                                            <Link to={service.link}>
                                                <span className="btn-txt">Read More</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabStyle2;