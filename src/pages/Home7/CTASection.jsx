import React from 'react';
import CTAwithVideo from '../../components/CTA/CTAwithVideo';
import ctaBgVideo from '../../assets/images/cta-bg-video.mp4';
import arrowImg from '../../assets/images/cta/style1/arrow.png';

const CTASection = () => {
    return (
        <CTAwithVideo
            ctaBgVideo={ctaBgVideo}
            arrowImg={arrowImg}
            ctaStyleClass={'cta-style2'}
            otherClass={'pt-100 pb-100 md-pt-70 md-pb-70'}
            iconClass={'pink-phone'}
        />
    );
};

export default CTASection;