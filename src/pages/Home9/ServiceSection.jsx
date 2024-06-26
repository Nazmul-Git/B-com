import React from 'react';
import TabFiveCard from '../../components/services/TabFiveCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ser1 from '../../assets/images/services/style8/ser-1.png';
import ser2 from '../../assets/images/services/style8/ser-2.png';
import ser3 from '../../assets/images/services/style8/ser-3.png';
import ser4 from '../../assets/images/services/style8/ser-4.png';

const ServiceSection = () => {
    const services = [
        {
            id: 1,
            image: ser1,
            title: 'Business Development',
            description: 'Mattis molestie a iaculis erat the pellentesque. Amet coectetur',
            link: '/services-style-1'
        },
        {
            id: 2,
            image: ser2,
            title: 'Customer Relationship',
            description: 'Mattis molestie a iaculis erat the pellentesque. Amet coectetur',
            link: '/services-style-1'
        },
        {
            id: 3,
            image: ser3,
            title: 'Process & Tools',
            description: 'Mattis molestie a iaculis erat the pellentesque. Amet coectetur',
            link: '/services-style-1'
        },
        {
            id: 4,
            image: ser4,
            title: 'Communication',
            description: 'Mattis molestie a iaculis erat the pellentesque. Amet coectetur',
            link: '/services-style-1'
        },
    ];

    return (
        <div className="rs-services services-style5 services-modify5 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <SectionTitle
                    otherClass={'text-center mb-40'}
                    subText={true}
                    subtextTitleClass={'sub-text sub-text2 sub-text5'}
                    subtextTitle={'WHAT you will be learn'}
                    lineBreak={true}
                    titleBreak1={'What can you learn'}
                    titleBreak2={'from this book'}
                />
                <div className="row">
                    {services.map(service => (
                        <TabFiveCard
                            key={service.id}
                            mainImg={service.image}
                            title={service.title}
                            description={service.description}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
