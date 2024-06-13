import React from 'react';
import ServiceSection from './ServiceSection';
import SliderSection from './SliderSection';
import service1 from '../../assets/images/services/main-home/ser1.png';
import service2 from '../../assets/images/services/main-home/ser2.png';
import service3 from '../../assets/images/services/main-home/ser3.png';
import service4 from '../../assets/images/services/main-home/ser4.png';
import service5 from '../../assets/images/services/main-home/ser5.png';
import service6 from '../../assets/images/services/main-home/ser6.png';
import service7 from '../../assets/images/services/main-home/ser7.png';
import service8 from '../../assets/images/services/main-home/ser8.png';
import AboutSection from './AboutSection';
import featureImg1 from '../../assets/images/feature/style1/img1.png';
import featureShape1 from '../../assets/images/feature/style1/shape1.png';
import WhyChooseSection from './WhyChooseSection';
import aboutMainImage from '../../assets/images/about/style1/about-main.jpg';
import ProjectSection from './ProjectSection';
import project1 from '../../assets/images/project/style1/pro-1.jpg';
import project2 from '../../assets/images/project/style1/pro-2.jpg';
import project3 from '../../assets/images/project/style1/pro-3.jpg';
import project4 from '../../assets/images/project/style1/pro-4.jpg';
import project5 from '../../assets/images/project/style1/pro-5.jpg';
import project6 from '../../assets/images/project/style1/pro-6.jpg';
import projectShape1 from '../../assets/images/bg/pro-shape1.png';
import projectShape2 from '../../assets/images/bg/pro-shape2.png';
import TestimonialSection from './TestimonialSection';
import ContactSection from './ContactSection';
import BlogSection from './BlogSection';
import PartnerSection from './PartnerSection';
import CTASection from './CTASection';
import arrowImg from '../../assets/images/cta/style1/arrow.png';
import ctaBgVideo from '../../assets/images/cta-bg-video.mp4';


const HomeFourMain = () => {
    return (
        <>
            <SliderSection />

            <ServiceSection
                service1={service1}
                service2={service2}
                service3={service3}
                service4={service4}
                service5={service5}
                service6={service6}
                service7={service7}
                service8={service8}
            />

            <AboutSection
                featureImg1={featureImg1}
                featureShape1={featureShape1}
                service1={service1}
                service7={service7}
            />
            <WhyChooseSection
                aboutMainImage={aboutMainImage}
            />

            <ProjectSection
                project1={project1}
                project2={project2}
                project3={project3}
                project4={project4}
                project5={project5}
                project6={project6}
                title={'Projects'}
                titleClass={'sub-text sub-text2 sub-text7'}
                details={'Our case studies'}
                detailClass={'title pb-27'}
                mainClass={'sec-title'}
                otherClass={'mb-50'}
                projectShape1={projectShape1}
                projectShape2={projectShape2}

            />

            <TestimonialSection />

            <ContactSection />

            <BlogSection
                showPagination={true}
            />

            <PartnerSection />

            <CTASection
                arrowImg={arrowImg}
                ctaBgVideo={ctaBgVideo}
            />
        </>
    );
};

export default HomeFourMain;