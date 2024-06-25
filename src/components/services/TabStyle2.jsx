import React from 'react';
import { Link } from 'react-router-dom';
import TabTwoCard from './TabTwoCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const TabStyle2 = ({ servicesData }) => {
    return (
        <div className={`rs-services services-style6 bg26 pt-135 pb-140 md-pt-75 md-pb-80`}>
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-7">
                        <SectionTitle
                            title={'One of the fastest ways to gain business success'}
                            titleClass={'title title11'}
                        />
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