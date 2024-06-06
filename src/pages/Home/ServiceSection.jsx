import React from 'react';
import ServiceTabStyle1 from '../../components/services/TabStyle1';
import serviceImage1 from '../../assets/images/services/style10/ser-1.jpg';
import serviceImage2 from '../../assets/images/services/style10/ser-2.jpg';
import serviceImage3 from '../../assets/images/services/style10/ser-3.jpg';
import serviceImage4 from '../../assets/images/services/style10/ser-4.jpg';
import serviceImage5 from '../../assets/images/services/style10/ser-5.jpg';
import curveArrow from '../../assets/images/services/style10/curv-arrow.png';

const ServiceSection = () => {
    const tabs = [
        { id: 1, icon: 'ri-briefcase-line', title: 'Business Services', img: serviceImage1, href: '/business-services' },
        { id: 2, icon: 'ri-bar-chart-line', title: 'Consumer Product', img: serviceImage2, href: '/consumer-product' },
        { id: 3, icon: 'ri-hand-coin-line', title: 'Financial Services', img: serviceImage3, href: '/financial-services' },
        { id: 4, icon: 'ri-computer-line', title: 'Quality Resourcing', img: serviceImage4, href: '/quality-resourcing' },
        { id: 5, icon: 'ri-plant-line', title: 'Investment Advisory', img: serviceImage5, href: '/investment-advisory' }
    ];
    return (
        <div className="rs-services bg18 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <ServiceTabStyle1
                    tabs={tabs}
                    curveArrow={curveArrow}
                    title={'We serve the best work'}
                    details={'We perform full analysis of the website and collect information.'}
                    contentTitle={'Great solution for your business growth'}
                    contentDetails={'We perform full analysis of the client’s website and collect information about the competitors to formulate a proper strategy there.'}
                />
            </div>
        </div>
    );
};

export default ServiceSection;