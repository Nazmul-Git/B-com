import React from 'react';
import ServiceSection from './ServiceSection';
import BannerSection from './BannerSection';
import about1 from '../../assets/images/about/style4/about-1.png';
import about2 from '../../assets/images/about/style4/img1.png';
import AboutSection from './AboutSection';
import FeatureSection from './FeatureSection';
import featureIcon1 from '../../assets/images/feature/style6/icon-1.png';
import featureIcon2 from '../../assets/images/feature/style6/icon-2.png';
import featureIcon3 from '../../assets/images/feature/style6/icon-3.png';
import featureImg1 from '../../assets/images/feature/style6/img-1.png';
import featureImg2 from '../../assets/images/feature/style6/img-2.png';
import ContactSection from './ContactSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import BlogSection from './BlogSection';
const HomeFiveMain = () => {
    return (
        <>
            <BannerSection />

            <ServiceSection />

            <AboutSection
                about1={about1}
                about2={about2}
            />
            <FeatureSection
                featureIcon1={featureIcon1}
                featureIcon2={featureIcon2}
                featureIcon3={featureIcon3}
                featureImg1={featureImg1}
                featureImg2={featureImg2}
            />

            <ContactSection />

            <TestimonialSection />

            <FAQSection
                activeItem={0}
                itemsArray={[0, 1, 2]}
            />

            <BlogSection
                showPagination={true}
            />
        </>
    );
};

export default HomeFiveMain;