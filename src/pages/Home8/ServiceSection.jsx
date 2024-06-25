import React from 'react';
import serviceIcon1 from '../../assets/images/services/main-home/blue/ser-1.png';
import serviceIcon2 from '../../assets/images/services/main-home/blue/ser-2.png';
import serviceIcon3 from '../../assets/images/services/main-home/blue/ser-3.png';
import serviceIcon4 from '../../assets/images/services/main-home/blue/ser-4.png';
import serviceIcon5 from '../../assets/images/services/main-home/blue/ser-5.png';
import serviceIcon6 from '../../assets/images/services/main-home/blue/ser-6.png';
import ServiceCard from '../../components/services/ServiceCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ServicesSection = () => {
    const services = [
        {
            number: '01',
            icon: serviceIcon1,
            title: 'Investment Advisory',
            description: 'Professionally cultivate one-to-one customer service with robust ideas and dynamic innovation are resource-leveling',
            link: '/investment-advisory'
        },
        {
            number: '02',
            icon: serviceIcon2,
            title: 'Financial Services',
            description: 'Professionally cultivate one-to-one customer service with robust ideas and dynamic innovation are resource-leveling',
            link: '/financial-services'
        },
        {
            number: '03',
            icon: serviceIcon3,
            title: 'Business Consulting',
            description: 'Professionally cultivate one-to-one customer service with robust ideas and dynamic innovation are resource-leveling',
            link: '/business-consulting'
        },
        {
            number: '04',
            icon: serviceIcon4,
            title: 'Business Strategy',
            description: 'Professionally cultivate one-to-one customer service with robust ideas and dynamic innovation are resource-leveling',
            link: '/business-services'
        },
        {
            number: '05',
            icon: serviceIcon5,
            title: 'Technology Consulting',
            description: 'Professionally cultivate one-to-one customer service with robust ideas and dynamic innovation are resource-leveling',
            link: '/business-services'
        },
        {
            number: '06',
            icon: serviceIcon6,
            title: 'Advanced Analytic',
            description: 'Professionally cultivate one-to-one customer service with robust ideas and dynamic innovation are resource-leveling',
            link: '/business-services'
        }
    ];

    return (
        <div className="rs-services services-style8 pt-135 pb-152 md-pt-75 md-pb-92">
            <div className="container">
                <SectionTitle
                    otherClass={'text-center mb-60'}
                    title={'Business shaped solutions'}
                />
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-xl-4 col-md-6 mb-55" key={index}>
                            <ServiceCard
                                number={service.number}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                link={service.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
