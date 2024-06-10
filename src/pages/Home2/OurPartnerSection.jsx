import React from 'react';
import Partner from '../../components/Partner/Partner';

const OurPartnerSection = ({logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12}) => {
    const partnerLogos = [
        { src: logo1, alt: 'Partner 1' },
        { src: logo2, alt: 'Partner 2' },
        { src: logo3, alt: 'Partner 3' },
        { src: logo4, alt: 'Partner 4' },
        { src: logo5, alt: 'Partner 5' },
        { src: logo6, alt: 'Partner 6' },
        { src: logo7, alt: 'Partner 7' },
        { src: logo8, alt: 'Partner 8' },
        { src: logo9, alt: 'Partner 9' },
        { src: logo10, alt: 'Partner 10' },
        { src: logo11, alt: 'Partner 11' },
        { src: logo12, alt: 'Partner 12' },
    ];

    return (
        <Partner partnerLogos={partnerLogos}
        />
    );
};

export default OurPartnerSection;