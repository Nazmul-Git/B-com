import React from 'react';
// Importing images
import logo1 from '../../assets/images/partner/style1/black-logo/ptnr-1.png';
import logo2 from '../../assets/images/partner/style1/black-logo/ptnr-2.png';
import logo3 from '../../assets/images/partner/style1/black-logo/ptnr-3.png';
import logo4 from '../../assets/images/partner/style1/black-logo/ptnr-4.png';
import logo5 from '../../assets/images/partner/style1/black-logo/ptnr-5.png';
import logo6 from '../../assets/images/partner/style1/black-logo/ptnr-6.png';
import logo7 from '../../assets/images/partner/style1/black-logo/ptnr-7.png';
import logo8 from '../../assets/images/partner/style1/black-logo/ptnr-8.png';
import logo9 from '../../assets/images/partner/style1/black-logo/ptnr-9.png';
import logo10 from '../../assets/images/partner/style1/black-logo/ptnr-10.png';
import logo11 from '../../assets/images/partner/style1/black-logo/ptnr-11.png';
import logo12 from '../../assets/images/partner/style1/black-logo/ptnr-12.png';
import Partner from '../../components/Partner/Partner'

const PartnerSection = () => {
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
        <div className="rs-partner partner-style2 bg11 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="partner-bg-overlay"></div>
            <div className="container">
                <div className="sec-title text-center mb-65">
                    <span className="sub-text sub-text2 sub-text7">Valued Partners</span>
                    <h2 className="title pb-24">
                        We Partnered with 30k+ Fastest<br/>
                        Growing Companies
                    </h2>
                    <div className="heading-border-line"></div>
                </div>
                <div className="row no-gutters">
                    {
                        partnerLogos.map((logo, index) => (
                            <Partner key={index} logo={logo} colClass={'col-lg-3'}/>
                        ))
                    }
                </div>
            </div>
        </div>

    )
};

export default PartnerSection;