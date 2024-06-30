import React from 'react';
import CTASection from './CTASection';
import bgImage from '../../../../assets/images/breadcrumbs/inr-1.jpg'
import BannerCommon from '../../../../components/Banner/BannerCommon';
import ProjectSection from './ProjectSection';

const Portfolio2Main = () => {
    return (
        <>
            <BannerCommon
                pageTitle={'Portfolio 02'}
                bgImage={bgImage}
            />
            <ProjectSection/>
            <CTASection />
        </>
    );
};

export default Portfolio2Main;