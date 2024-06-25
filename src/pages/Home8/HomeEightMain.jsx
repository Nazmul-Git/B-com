import React from 'react';
import ServiceSection from './ServiceSection';
import BannerSection from './BannerSection';
import FeatureSection from './FeatureSection';
import ProjectSection from './ProjectSection';
import FeatureSection2 from './FeatureSection2';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import PartnersSection from './PartnerSection';
import CTASection from './CTASection';

const HomeEightMain = () => {
    return (
        <>
            <BannerSection />
            <FeatureSection />
            <ServiceSection />
            <ProjectSection />
            <FeatureSection2 />
            <TestimonialSection
                preview={3}
            />
            <BlogSection
                showPagination={true}
            />
            <ContactSection/>
            <PartnersSection/>
            <CTASection/>
        </>
    );
};

export default HomeEightMain;