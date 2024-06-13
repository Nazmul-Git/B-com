import React from 'react';
import TabStyle4 from '../../components/services/TabStyle4';

const ServiceSection = ({ service1, service2, service3, service4, service5, service6,service7,service8 }) => {

    const servicesData = [
        {
            id: 1,
            image: service1,
            title: 'Business Services',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: '/business-services'
        },
        {
            id: 2,
            image: service2,
            title: 'Quality Resourcing',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: '/quality-resourcing'
        },
        {
            id: 3,
            image: service3,
            title: 'Financial Services',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: '/financial-services'
        },
        {
            id: 4,
            image: service4,
            title: 'Investment Advisory',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: '/investment-advisory'
        },
        {
            id: 5,
            image: service5,
            title: 'Security Services',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: '/security-services'
        },
        {
            id: 6,
            image: service6,
            title: 'Advanced Analytics',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: '/advanced-analytic'
        },
        {
            id: 7,
            image: service7,
            title: 'Advanced Analytics',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: '/advanced-analytic'
        },
        {
            id: 8,
            image: service8,
            title: 'Advanced Analytics',
            description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
            link: '/advanced-analytic'
        },
    ];
    return (
        <TabStyle4
            servicesData={servicesData}
        />
    );
};

export default ServiceSection;