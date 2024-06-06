import React from 'react';
import ServiceSection from './ServiceSection';
import SliderSection from './SliderSection';
import AboutSection from './AboutSection';
import image1 from '../../assets/images/about/style2/img1.png';
import image2 from '../../assets/images/about/style2/img2.png';
import WhyChooseSection from './WhyChooseSection';
import whyNew from '../../assets/images/choose/style1/why-new.jpg'
import pettarn from '../../assets/images/choose/style1/pettarn.png';
import dot from '../../assets/images/choose/style1/dot.png';
import ProjectSection from './ProjectSection';
import port1 from '../../assets/images/project/style5/port-1.jpg';
import port2 from '../../assets/images/project/style5/port-2.jpg';
import port3 from '../../assets/images/project/style5/port-3.jpg';
import port4 from '../../assets/images/project/style5/port-4.jpg';

const HomeMain = () => {
    const projects = [
        {
            id: 1,
            category: 'Digital marketing',
            title: 'Market Analysis',
            image: port1
        },
        {
            id: 2,
            category: 'App Design',
            title: 'Market Analysis',
            image: port2
        },
        {
            id: 3,
            category: 'Development Service',
            title: 'Investment Plan',
            image: port3
        },
        {
            id: 4,
            category: 'Marketing Service',
            title: 'Risk Management',
            image: port4
        },
        {
            id: 5,
            category: 'Development Service',
            title: 'Investment Plan',
            image: port1
        },
        {
            id: 6,
            category: 'Branding Design',
            title: 'Inventory Management',
            image: port2
        }
    ];

    return (
        <>
            {/* Hero Slider Section */}
            <SliderSection />

            {/* About Section */}
            <AboutSection
                image1={image1}
                image2={image2}
            />

            {/* Service Section */}
            <ServiceSection />

            {/* Why choose us section */}
            <WhyChooseSection
                whyNew={whyNew}
                pettarn={pettarn}
                dot={dot}
            />

            {/* Projects section */}
            <ProjectSection
                projects={projects}
                title={'Our completed projects'}
            />
        </>
    );
};

export default HomeMain;