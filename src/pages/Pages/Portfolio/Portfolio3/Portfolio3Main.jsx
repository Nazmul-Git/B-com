import React from 'react';
import ProjectSection from './ProjectSection';
import CTASection from './CTASection';
import bgImage from '../../../../assets/images/breadcrumbs/inr-3.jpg'
import BannerCommon from '../../../../components/Banner/BannerCommon';

const Portfolio3Main = () => {
    return (
        <>
            <BannerCommon
                pageTitle={'Portfolio 03'}
                bgImage={bgImage}
            />
            <ProjectSection/>
            <CTASection />
        </>
    );
};

export default Portfolio3Main;