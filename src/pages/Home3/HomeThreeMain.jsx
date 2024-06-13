import React from 'react';
import ServiceSection from './ServiceSection';
import BannerSection from './BannerSection';
import circleImg from '../../assets/images/banner/style9/circle.png';
import AboutSection from './AboutSection';
import girlImg from '../../assets/images/about/style7/girl.png';
import boyImg from '../../assets/images/about/style7/boy.png';
import icon1 from '../../assets/images/about/style7/icon1.png';
import icon2 from '../../assets/images/about/style7/icon2.png';
import sign from '../../assets/images/about/style7/sign.png';
import WhyChooseSection from './WhyChooseSection';
import ProjectSection from './ProjectSection';
import project1 from '../../assets/images/project/style6/pro-1.jpg';
import project2 from '../../assets/images/project/style6/pro-2.jpg';
import project3 from '../../assets/images/project/style6/pro-3.jpg';
import project4 from '../../assets/images/project/style6/pro-4.jpg';
import project5 from '../../assets/images/project/style6/pro-5.jpg';
import project6 from '../../assets/images/project/style6/pro-6.jpg';
import TestimonialSection from './TestimonialSection';
import VideoSection from './VideoSection';
import BlogSection from './BlogSection';
import CTASection from './CTASection';

const HomeThreeMain = () => {
    return (
        <>
            <BannerSection
                bannerClass={'banner-style10'}
                containerClass={'custom12'}
                circleImg={circleImg}
            />
            <AboutSection
                girlImg={girlImg}
                boyImg={boyImg}
                icon1={icon1}
                icon2={icon2}
                sign={sign}
            />
            <ServiceSection
                title={'We Serve The Best Work'}
            />

            <WhyChooseSection />

            <ProjectSection
                project1={project1}
                project2={project2}
                project3={project3}
                project4={project4}
                project5={project5}
                project6={project6}
            />

            <TestimonialSection />

            <VideoSection
                title={"We're Delivering The Best Customer Experience"}
                details={' Placerat vestibulum lectus mauris ultrices eros in. At urna condimen mattis pellentesque id nibh. Massa neque aliquam vestibulum morbi.'}
            />

            <BlogSection/>

            <CTASection/>
        </>
    );
};

export default HomeThreeMain;