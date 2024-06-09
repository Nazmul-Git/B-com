import React from 'react';
import TabStyle2 from '../../components/services/TabStyle2';

const ServiceSection = ({ service1, service2, service3, service4, service5, service6 }) => {

    const servicesData = [
        {
            id: 1,
            image: service1,
            title: 'Business Services',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: 'business-services.html'
        },
        {
            id: 2,
            image: service2,
            title: 'Quality Resourcing',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: 'quality-resourcing.html'
        },
        {
            id: 3,
            image: service3,
            title: 'Financial Services',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: 'financial-services.html'
        },
        {
            id: 4,
            image: service4,
            title: 'Investment Advisory',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: 'investment-advisory.html'
        },
        {
            id: 5,
            image: service5,
            title: 'Security Services',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: 'security-services.html'
        },
        {
            id: 6,
            image: service6,
            title: 'Advanced Analytics',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: 'advanced-analytic.html'
        }
    ];
    return (
        <TabStyle2
            servicesData={servicesData}
        />
    );
};

export default ServiceSection;