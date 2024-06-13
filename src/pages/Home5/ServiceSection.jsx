import React from 'react';
import TabStyle5 from '../../components/services/TabStyle5';
import serviceIcon1 from '../../assets/images/services/style5/ser-1.png';
import serviceIcon2 from '../../assets/images/services/style5/ser-2.png';
import serviceIcon3 from '../../assets/images/services/style5/ser-3.png';
import serviceIcon4 from '../../assets/images/services/style5/ser-4.png';
import serviceIcon5 from '../../assets/images/services/style5/ser-5.png';
import serviceIcon6 from '../../assets/images/services/style5/ser-6.png';

const ServiceSection = () => {
    const services = [
        {
            mainImg: serviceIcon1,
            title: 'Life Insurance',
            description: 'Vel facilisis volutpat est velit egestas. Augue neque gravida in fermentum.',
            link: '/services-style-1'
        },
        {
            mainImg: serviceIcon2,
            title: 'Health Insurance',
            description: 'Vel facilisis volutpat est velit egestas. Augue neque gravida in fermentum.',
            link: '/services-style-1'
        },
        {
            mainImg: serviceIcon3,
            title: 'Education Insurance',
            description: 'Vel facilisis volutpat est velit egestas. Augue neque gravida in fermentum.',
            link: '/services-style-1'
        },
        {
            mainImg: serviceIcon4,
            title: 'Vehicle Insurance',
            description: 'Vel facilisis volutpat est velit egestas. Augue neque gravida in fermentum.',
            link: '/services-style-1'
        },
        {
            mainImg: serviceIcon5,
            title: 'Bank Insurance',
            description: 'Vel facilisis volutpat est velit egestas. Augue neque gravida in fermentum.',
            link: '/services-style-1'
        },
        {
            mainImg: serviceIcon6,
            title: 'Family Insurance',
            description: 'Vel facilisis volutpat est velit egestas. Augue neque gravida in fermentum.',
            link: '/services-style-1'
        }
    ];

    return (
        <div className="rs-services services-style5 gray-bg7 pt-125 pb-130 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50">
                    <h2 className="title pb-25">
                        We provide the best<br/>services
                    </h2>
                    <div className="heading-border-line pre-heading-line1"></div>
                </div>
                <TabStyle5 services={services} />
            </div>
        </div>
    );
};

export default ServiceSection;