import React from 'react';
import SliderSection from './SliderSection ';
import AboutSection from './AboutSection';
import img1 from '../../assets/images/about/style6/img-1.jpg';
import businessSuccess from '../../assets/images/about/style6/business-success.png';
import rocket from '../../assets/images/about/style6/rocket.png';
import ServiceSection from './ServiceSection';
import service1 from '../../assets/images/services/style11/ser-1.png';
import service2 from '../../assets/images/services/style11/ser-2.png';
import service3 from '../../assets/images/services/style11/ser-3.png';
import service4 from '../../assets/images/services/style11/ser-4.png';
import service5 from '../../assets/images/services/style11/ser-5.png';
import service6 from '../../assets/images/services/style11/ser-6.png';
import ProjectSection from './ProjectSection';
import project1 from '../../assets/images/project/style6/pro-1.jpg';
import project2 from '../../assets/images/project/style6/pro-2.jpg';
import project3 from '../../assets/images/project/style6/pro-3.jpg';
import project4 from '../../assets/images/project/style6/pro-4.jpg';
import project5 from '../../assets/images/project/style6/pro-5.jpg';
import project6 from '../../assets/images/project/style6/pro-6.jpg';
import chooseImg1 from '../../assets/images/choose/style2/img1.png';
import chooseImg2 from '../../assets/images/choose/style2/img2.png';
import WhyChooseSection from './WhyChooseSection';
import PricingSection from './PricingSection';
import CTA_Section from './CTA_Section';
import dotImage from '../../assets/images/cta/style1/dot.png';
import arrow from '../../assets/images/cta/style1/arrow.png';

const HomeTwoMain = () => {
    return (
        <>
            <SliderSection />
            <AboutSection
                img1={img1}
                businessSuccess={businessSuccess}
                rocket={rocket}
            />
            <ServiceSection
                service1={service1}
                service2={service2}
                service3={service3}
                service4={service4}
                service5={service5}
                service6={service6}
            />
            <ProjectSection
                project1={project1}
                project2={project2}
                project3={project3}
                project4={project4}
                project5={project5}
                project6={project6}
            />
            <WhyChooseSection
                chooseImg1={chooseImg1}
                chooseImg2={chooseImg2}
            />
            <PricingSection />

            <CTA_Section
                arrow={arrow}
                title={' Developing Leader and high performance team'}
                details={'Placerat vestibulum lectus mauris ultrices eros in. At urna condimen mattis pellentesque id nibh. Massa neque aliquam vestibulum morbi.'}
                dotImage={dotImage}
            />
        </>
    );
};

export default HomeTwoMain;