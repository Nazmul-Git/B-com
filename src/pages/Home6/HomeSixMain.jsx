import React from 'react';
import ServiceSection from './ServiceSection';
import BannerSection from './BannerSection';
import PartnerSection from './PartnerSection';
import FeatureSection from './FeatureSection';
import ProjectSection from './ProjectSection';
import ProgressSection from './ProgressSection';
import TestimonialSection from './TestimonialSection';
import WorkProcessSection from './WorkProcessSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';

const HomeSixMain = () => {
    return (
        <>
            <BannerSection />
            <PartnerSection />
            <FeatureSection />
            <ServiceSection />
            <ProjectSection
                showPagination={true}
            />
            <ProgressSection/>
            <TestimonialSection/>
            <WorkProcessSection/>
            <BlogSection/>
            <ContactSection/>
        </>
    );
};

export default HomeSixMain;