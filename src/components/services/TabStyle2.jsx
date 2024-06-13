import React from 'react';
import { Link } from 'react-router-dom';
import TabTwoCard from './TabTwoCard';

const TabStyle2 = ({ servicesData }) => {
    return (
        <div className={`rs-services services-style6 bg26 pt-135 pb-140 md-pt-75 md-pb-80`}>
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
                    {
                        servicesData.map(service => (
                            <TabTwoCard key={service.id}
                                service={service}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TabStyle2;