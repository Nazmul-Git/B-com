import React from 'react';
import { Link } from 'react-router-dom';
import Partner from '../../components/Partner/Partner';

// Importing images
import ptnr1 from '../../assets/images/partner/style1/black-logo/ptnr-1.png';
import ptnr2 from '../../assets/images/partner/style1/black-logo/ptnr-2.png';
import ptnr3 from '../../assets/images/partner/style1/black-logo/ptnr-3.png';
import ptnr4 from '../../assets/images/partner/style1/black-logo/ptnr-4.png';
import ptnr5 from '../../assets/images/partner/style1/black-logo/ptnr-5.png';
import ptnr6 from '../../assets/images/partner/style1/black-logo/ptnr-6.png';
import ptnr7 from '../../assets/images/partner/style1/black-logo/ptnr-7.png';
import ptnr8 from '../../assets/images/partner/style1/black-logo/ptnr-8.png';
import ptnr9 from '../../assets/images/partner/style1/black-logo/ptnr-9.png';

const partnerData = [
    { link: "https://rstheme.com", src: ptnr1, alt: "Partner 1" },
    { link: "https://rstheme.com", src: ptnr2, alt: "Partner 2" },
    { link: "https://rstheme.com", src: ptnr3, alt: "Partner 3" },
    { link: "https://rstheme.com", src: ptnr4, alt: "Partner 4" },
    { link: "https://rstheme.com", src: ptnr5, alt: "Partner 5" },
    { link: "https://rstheme.com", src: ptnr6, alt: "Partner 6" },
    { link: "https://rstheme.com", src: ptnr7, alt: "Partner 7" },
    { link: "https://rstheme.com", src: ptnr8, alt: "Partner 8" },
    { link: "https://rstheme.com", src: ptnr9, alt: "Partner 9" },
];

const OurPartners = () => {
    return (
        <div className="rs-partner partner-style2 partner-modify5 partner-about1 gray-bg29 pt-130 pb-130 md-pt-80 md-pb-80">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-5 pr-50 md-pr-15 md-mb-50">
                        <div className="sec-title">
                            <h2 className="title title11 pb-24">
                                Our Partners
                            </h2>
                            <p className="desc desc8 pb-35">
                                Collaboratively administrate empowered markets via plug-and-play networks. Dramatically visualize customer directed revolutionary ROI.
                            </p>
                            <div className="btn-part">
                                <Link className="readon consultant get-yellow blue-light" to="/contact-us-1">View Partners</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="partner-wrap">
                            <div className="row no-gutters">
                                {partnerData.map((partner, index) => (
                                    <Partner key={index} logo={partner} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
