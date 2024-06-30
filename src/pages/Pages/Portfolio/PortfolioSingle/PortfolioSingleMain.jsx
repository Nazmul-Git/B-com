import React from 'react';
import ProjectSection from './ProjectSection';
import CTASection from './CTASection';
import bgImage from '../../../../assets/images/breadcrumbs/inr-2.jpg'
import BannerCommon from '../../../../components/Banner/BannerCommon';

const PortfolioSingleMain = () => {
    return (
        <>
            <BannerCommon
                pageTitle={'Portfolio Single'}
                bgImage={bgImage}
            />
            <ProjectSection/>
            <CTASection />
        </>
    );
};

export default PortfolioSingleMain;