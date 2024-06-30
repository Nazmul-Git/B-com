import React from 'react';
import TeamSection from './TeamSection';
import CTASection from './CTASection';
import BannerCommon from '../../../components/Banner/BannerCommon';
import bgImage from '../../../assets/images/breadcrumbs/inr-2.jpg'

const TeamMain = () => {
    return (
        <>
            <BannerCommon
                pageTitle={'Our Team'}
                bgImage={bgImage}
            />
            <TeamSection />
            <CTASection />
        </>
    );
};

export default TeamMain;