import React from 'react';
import CTAwithVideo from '../../components/CTA/CTAwithVideo';

const CTASection = ({ arrowImg, ctaBgVideo }) => {
    return (
        <CTAwithVideo
            arrowImg={arrowImg}
            ctaBgVideo={ctaBgVideo}
        />
    );
};

export default CTASection;
