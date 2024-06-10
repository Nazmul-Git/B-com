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
import BlogSection from './BlogSection';
import blog1 from '../../assets/images/blog/style2/bl1.jpg';
import blog2 from '../../assets/images/blog/style2/bl2.jpg';
import blog3 from '../../assets/images/blog/style2/bl3.jpg';
import OurPartnerSection from './OurPartnerSection';
// Importing images
import logo1 from '../../assets/images/partner/style1/black-logo/ptnr-1.png';
import logo2 from '../../assets/images/partner/style1/black-logo/ptnr-2.png';
import logo3 from '../../assets/images/partner/style1/black-logo/ptnr-3.png';
import logo4 from '../../assets/images/partner/style1/black-logo/ptnr-4.png';
import logo5 from '../../assets/images/partner/style1/black-logo/ptnr-5.png';
import logo6 from '../../assets/images/partner/style1/black-logo/ptnr-6.png';
import logo7 from '../../assets/images/partner/style1/black-logo/ptnr-7.png';
import logo8 from '../../assets/images/partner/style1/black-logo/ptnr-8.png';
import logo9 from '../../assets/images/partner/style1/black-logo/ptnr-9.png';
import logo10 from '../../assets/images/partner/style1/black-logo/ptnr-10.png';
import logo11 from '../../assets/images/partner/style1/black-logo/ptnr-11.png';
import logo12 from '../../assets/images/partner/style1/black-logo/ptnr-12.png';
import CTATwoSection from './CTATwoSection';

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
            <BlogSection
                blog1={blog1}
                blog2={blog2}
                blog3={blog3}
            />

            <OurPartnerSection
                logo1={logo1}
                logo2={logo2}
                logo3={logo3}
                logo4={logo4}
                logo5={logo5}
                logo6={logo6}
                logo7={logo7}
                logo8={logo8}
                logo9={logo9}
                logo10={logo10}
                logo11={logo11}
                logo12={logo12}
            />

            <CTATwoSection
                arrow={arrow}
            />
        </>
    );
};

export default HomeTwoMain;