import React from 'react';
import ServiceSection from './ServiceSection';
import BannerSection from './BannerSection';
import PartnerSection from './PartnerSection';
import FeatureSection from './FeatureSection';
import ProjectSection from './ProjectSection';

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
        </>
    );
};

export default HomeSixMain;