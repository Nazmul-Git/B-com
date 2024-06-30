import React from 'react';
import ProjectSection from './ProjectSection';
import CTASection from './CTASection';
import bgImage from '../../../../assets/images/breadcrumbs/inr-3.jpg'
import BannerCommon from '../../../../components/Banner/BannerCommon';

const Portfolio1Main = () => {
    return (
        <>
            <BannerCommon
                pageTitle={'Portfolio 01'}
                bgImage={bgImage}
            />
            <ProjectSection />
            <CTASection />
        </>
    );
};

export default Portfolio1Main;