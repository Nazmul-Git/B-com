import React from 'react';
import ProjectSection from './ProjectSection';
import CTASection from './CTASection';
import bgImage from '../../../../assets/images/breadcrumbs/inr-2.jpg'
import BannerCommon from '../../../../components/Banner/BannerCommon';

const PortfolioFilterMain = () => {
    return (
        <>
            <BannerCommon
                pageTitle={'Portfolio Filter'}
                bgImage={bgImage}
            />
            <ProjectSection/>
            <CTASection />
        </>
    );
};

export default PortfolioFilterMain;