import React from 'react';
import TabFourCard from './TabFourCard';

const TabStyle4 = ({ servicesData }) => {
    return (
        <div className="rs-services services-main-home bg7 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-65">
                    <span className="sub-text sub-text2 sub-text7">Our Services</span>
                    <h2 className="title pb-24">
                        Our Business Shaped Solutions
                        For Your Company
                    </h2>
                    <div className="heading-border-line"></div>
                </div>
                <div className="row">
                    {
                        servicesData.map((service, index) => (
                            <TabFourCard key={index}
                                image={service.image}
                                title={service.title}
                                details={service.details}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TabStyle4;