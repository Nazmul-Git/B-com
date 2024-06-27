import React from 'react';
import CTAwithVideo from '../../components/CTA/CTAwithVideo';
import arrow from '../../assets/images/cta/style1/arrow.png';
import ctaVideo from '../../assets/images/cta-bg-video.mp4';

const CTASection = () => {
    return (
        <CTAwithVideo
            arrowImg={arrow}
            ctaBgVideo={ctaVideo}
            ctaStyleClass={'cta-style8'}
        />
    );
};

export default CTASection;