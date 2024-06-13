import React from 'react';
import service1 from '../../assets/images/services/style2/ser-1.png';
import service2 from '../../assets/images/services/style2/ser-2.png';
import service3 from '../../assets/images/services/style2/ser-3.png';
import service4 from '../../assets/images/services/style2/ser-4.png';
import service5 from '../../assets/images/services/style2/ser-5.png';
import service6 from '../../assets/images/services/style2/ser-6.png';
import service7 from '../../assets/images/services/style2/ser-7.png';
import service8 from '../../assets/images/services/style2/ser-8.png';
import TabFiveCard from '../../components/services/TabFiveCard';

const servicesData = [
    {
        mainImg: service1,
        title: "Digital Marketing",
        description: "Globally incubate standards compliant channels before scalable benefits.",
        link: "/business-services"
    },
    {
        mainImg: service2,
        title: "Product Promotion",
        description: "Globally incubate standards compliant channels before scalable benefits.",
        link: "/consumer-product"
    },
    {
        mainImg: service3,
        title: "Financial Services",
        description: "Globally incubate standards compliant channels before scalable benefits.",
        link: "/financial-services"
    },
    {
        mainImg: service4,
        title: "Quality Resourcing",
        description: "Globally incubate standards compliant channels before scalable benefits.",
        link: "/quality-resourcing"
    },
    {
        mainImg: service5,
        title: "Investment Advisory",
        description: "Globally incubate standards compliant channels before scalable benefits.",
        link: "/investment-advisory"
    },
    {
        mainImg: service6,
        title: "Financial Advisory",
        description: "Globally incubate standards compliant channels before scalable benefits.",
        link: "/financial-advisory"
    },
    {
        mainImg: service7,
        title: "Advanced Analytic",
        description: "Globally incubate standards compliant channels before scalable benefits.",
        link: "/advanced-analytic"
    },
    {
        mainImg: service8,
        title: "24/7 Rapid Support",
        description: "Globally incubate standards compliant channels before scalable benefits.",
        link: "/business-services"
    },
];

// const ServiceItem = ({ mainImg, title, description, link }) => (
//     <div className="col-xl-3 col-md-6 mb-20">
//         <div className="services-item">
//             <div className="services-wrap">
//                 <div className="services-icon">
//                     <img src={mainImg} alt="" />
//                 </div>
//                 <div className="services-content">
//                     <h6 className="title">
//                         <a href={link}>{title}</a>
//                     </h6>
//                     <p className="services-txt">{description}</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

const ServicesSection = () => {
    return (
        <div className="rs-services services-style1 bg31">
            <div className="container custom4">
                <div className="services-provides-wrap pt-125 pb-130 md-pt-75 md-pb-80">
                    <div className="sec-title text-center mb-40">
                        <span className="sub-text">What it provides</span>
                        <h2 className="title">
                            business shaped<br />
                            solutions
                        </h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            {servicesData.map((service, index) => (
                                <TabFiveCard
                                    key={index}
                                    mainImg={service.mainImg}
                                    title={service.title}
                                    description={service.description}
                                    link={service.link}
                                    colClass={'col-xl-3 col-md-6'}
                                    otherClass={'mb-20'}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
