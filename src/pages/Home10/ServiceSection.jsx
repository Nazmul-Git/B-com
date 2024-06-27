import React from 'react';
import ser1Black from '../../assets/images/services/main-home/black/ser-1.png';
import ser1Purple from '../../assets/images/services/main-home/purple/ser-1.png';
import ser2Black from '../../assets/images/services/main-home/black/ser-2.png';
import ser2Purple from '../../assets/images/services/main-home/purple/ser-2.png';
import ser3Black from '../../assets/images/services/main-home/black/ser-3.png';
import ser3Purple from '../../assets/images/services/main-home/purple/ser-3.png';
import ser4Black from '../../assets/images/services/main-home/black/ser-4.png';
import ser4Purple from '../../assets/images/services/main-home/purple/ser-4.png';
import ser5Black from '../../assets/images/services/main-home/black/ser-5.png';
import ser5Purple from '../../assets/images/services/main-home/purple/ser-5.png';
import ser6Black from '../../assets/images/services/main-home/black/ser-6.png';
import ser6Purple from '../../assets/images/services/main-home/purple/ser-6.png';
import ser7Black from '../../assets/images/services/main-home/black/ser-7.png';
import ser7Purple from '../../assets/images/services/main-home/purple/ser-7.png';
import ser8Black from '../../assets/images/services/main-home/black/ser-8.png';
import ser8Purple from '../../assets/images/services/main-home/purple/ser-8.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TabFourCard from '../../components/services/TabFourCard';

const Services = () => {
    const servicesData = [
        {
            imgNormal: ser1Black,
            imgHover: ser1Purple,
            title: "Business Services",
            link: "/business-services",
            description: "A arcu cursus vitae congue the mauris rhoncus molestie"
        },
        {
            imgNormal: ser2Black,
            imgHover: ser2Purple,
            title: "Consumer Product",
            link: "/consumer-product",
            description: "A arcu cursus vitae congue the mauris rhoncus molestie"
        },
        {
            imgNormal: ser3Black,
            imgHover: ser3Purple,
            title: "Financial Services",
            link: "/financial-services",
            description: "A arcu cursus vitae congue the mauris rhoncus molestie"
        },
        {
            imgNormal: ser4Black,
            imgHover: ser4Purple,
            title: "Quality Resourcing",
            link: "/quality-resourcing",
            description: "A arcu cursus vitae congue the mauris rhoncus molestie"
        },
        {
            imgNormal: ser5Black,
            imgHover: ser5Purple,
            title: "Investment Advisory",
            link: "/investment-advisory",
            description: "A arcu cursus vitae congue the mauris rhoncus molestie"
        },
        {
            imgNormal: ser6Black,
            imgHover: ser6Purple,
            title: "Financial Advisory",
            link: "/financial-advisory",
            description: "A arcu cursus vitae congue the mauris rhoncus molestie"
        },
        {
            imgNormal: ser7Black,
            imgHover: ser7Purple,
            title: "Advanced Analytic",
            link: "/advanced-analytic",
            description: "A arcu cursus vitae congue the mauris rhoncus molestie"
        },
        {
            imgNormal: ser8Black,
            imgHover: ser8Purple,
            title: "24/7 Rapid Support",
            link: "/business-services",
            description: "A arcu cursus vitae congue the mauris rhoncus molestie"
        }
    ];

    return (
        <div className="rs-services services-style3 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <SectionTitle
                    otherClass={'text-center mb-40'}
                    subText={true}
                    subtextTitle={'What it provides'}
                    subtextTitleClass={'sub-text sub-text2'}
                    lineBreak={true}
                    titleBreak1={'business shaped'}
                    titleBreak2={'solutions'}
                />

                <ul className="row no-gutters">
                    {servicesData.map((service, index) => (
                        <TabFourCard
                            key={index}
                            isHoverImage={true}
                            image={service.imgNormal}
                            hoverImage={service.imgHover}
                            title={service.title}
                            details={service.description}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Services;
