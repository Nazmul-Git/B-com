import React from 'react';
import TabStyle3 from '../../components/services/TabStyle3';
import serviceIcon1 from '../../assets/images/services/style12/ser-1.png';
import serviceIcon2 from '../../assets/images/services/style12/ser-2.png';
import serviceIcon3 from '../../assets/images/services/style12/ser-3.png';
import serviceIcon4 from '../../assets/images/services/style12/ser-4.png';
import serviceIcon5 from '../../assets/images/services/style12/ser-5.png';
import serviceIcon6 from '../../assets/images/services/style12/ser-6.png';
import normalIcon1 from '../../assets/images/services/style12/normal-icon/icon-1.png';
import normalIcon2 from '../../assets/images/services/style12/normal-icon/icon-2.png';
import normalIcon3 from '../../assets/images/services/style12/normal-icon/icon-3.png';
import normalIcon4 from '../../assets/images/services/style12/normal-icon/icon-4.png';
import normalIcon5 from '../../assets/images/services/style12/normal-icon/icon-5.png';
import normalIcon6 from '../../assets/images/services/style12/normal-icon/icon-6.png';
import lightIcon1 from '../../assets/images/services/style12/light-icon/icon1.png';
import lightIcon2 from '../../assets/images/services/style12/light-icon/icon2.png';
import lightIcon3 from '../../assets/images/services/style12/light-icon/icon3.png';
import lightIcon4 from '../../assets/images/services/style12/light-icon/icon4.png';
import lightIcon5 from '../../assets/images/services/style12/light-icon/icon5.png';
import lightIcon6 from '../../assets/images/services/style12/light-icon/icon6.png';

const ServiceSection = ({title}) => {
    const services = [
        {
            mainImg: serviceIcon1,
            overlayNormalImg: normalIcon1,
            overlayHoverImg: lightIcon1,
            title: 'Business Services',
            description: 'Phosfluo rescently engage worldwide methodologies with web-enabled technology interactively',
            link: '/business-services'
        },
        {
            mainImg: serviceIcon2,
            overlayNormalImg: normalIcon2,
            overlayHoverImg: lightIcon2,
            title: 'Quality Resourcing',
            description: 'Phosfluo rescently engage worldwide methodologies with web-enabled technology interactively',
            link: '/quality-resourcing'
        },
        {
            mainImg: serviceIcon3,
            overlayNormalImg: normalIcon3,
            overlayHoverImg: lightIcon3,
            title: 'Financial Services',
            description: 'Phosfluo rescently engage worldwide methodologies with web-enabled technology interactively',
            link: '/financial-services'
        },
        {
            mainImg: serviceIcon4,
            overlayNormalImg: normalIcon4,
            overlayHoverImg: lightIcon4,
            title: 'Investment Advisory',
            description: 'Phosfluo rescently engage worldwide methodologies with web-enabled technology interactively',
            link: '/investment-advisory'
        },
        {
            mainImg: serviceIcon5,
            overlayNormalImg: normalIcon5,
            overlayHoverImg: lightIcon5,
            title: 'Advanced Analytic',
            description: 'Phosfluo rescently engage worldwide methodologies with web-enabled technology interactively',
            link: '/advanced-analytic'
        },
        {
            mainImg: serviceIcon6,
            overlayNormalImg: normalIcon6,
            overlayHoverImg: lightIcon6,
            title: 'Security Services',
            description: 'Phosfluo rescently engage worldwide methodologies with web-enabled technology interactively',
            link: '/security-services'
        }
    ];

    return (
        <div className="rs-services services-style7 relatives gray-bg27 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container custom10">
                <div className="shape-divider">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>
                <div className="sec-title text-center">
                    <h2 className="title title12 two-blue-subnormal">
                        <span className="watermark">{title}</span>
                    </h2>
                </div>
                <TabStyle3 services={services}/>
                <div className="shape-divider ser-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;