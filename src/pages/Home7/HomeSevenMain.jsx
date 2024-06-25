import React from 'react';
import ServiceSection from './ServiceSection';
import Banner7 from '../../components/Banner/Banner7';
import FeatureSection from './FeatureSection';
import FeatureSection2 from './FeatureSection2';
import ServicesSection2 from './ServiceSection2';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogSection';
import PartnersSection from './PartnerSection';
import CTASection from './CTASection';

const HomeSevenMain = () => {
    return (
        <>
            <Banner7 />
            <ServiceSection />
            <FeatureSection />
            <FeatureSection2 />
            <ServicesSection2 />
            <TestimonialSection />
            <BlogSection
                showPagination={true}
            />
            <PartnersSection/>
            <CTASection/>
        </>
    );
};

export default HomeSevenMain;