import React from 'react';
import ServiceSection from './ServiceSection';
import BannerCommon from '../../components/Banner/BannerCommon';
import bgImage from '../../assets/images/breadcrumbs/inr-1.jpg'
import AboutSection from './AboutSection';
import TeamSection from './TeamSection';
import OurPartners from './PartnerSection';
import CTASection from './CTASection';
const AboutMain = () => {
    return (
        <>
            <BannerCommon
                pageTitle={'About Us'}
                bgImage={bgImage}
            />
            <ServiceSection
                videoUrl='https://www.youtube.com/watch?v=FMvA5fyZ338'
            />
            <AboutSection
            />
            <TeamSection />
            <OurPartners />
            <CTASection />
        </>
    );
};

export default AboutMain;