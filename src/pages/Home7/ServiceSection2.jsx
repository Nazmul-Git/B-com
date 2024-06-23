import React from 'react';
import TabFiveCard from '../../components/services/TabFiveCard';
import ser1 from '../../assets/images/services/style7/ser-1.png';
import ser2 from '../../assets/images/services/style7/ser-2.png';
import ser3 from '../../assets/images/services/style7/ser-3.png';
import ser4 from '../../assets/images/services/style7/ser-4.png';

const servicesData = [
    { imgSrc: ser1, title: 'Multiple Method', description: 'Massa tincidunt dui ut ornare lectus sit amet est placerat.', link: 'services-style-1.html' },
    { imgSrc: ser2, title: 'Source Payment', description: 'Massa tincidunt dui ut ornare lectus sit amet est placerat.', link: 'services-style-1.html' },
    { imgSrc: ser3, title: 'Security Fast', description: 'Massa tincidunt dui ut ornare lectus sit amet est placerat.', link: 'services-style-1.html' },
    { imgSrc: ser4, title: 'Free Transaction', description: 'Massa tincidunt dui ut ornare lectus sit amet est placerat.', link: 'services-style-1.html' }
];

const ServicesSection2 = () => {
    return (
        <div id="rs-services" className="rs-services services-style5 services-modify4 gray-bg8 pt-170 pb-140 md-pt-110 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50">
                    <h2 className="title title5 heading-pink pb-25">
                        What’s you will Get
                    </h2>
                    <p className="desc">
                        Viverra adipiscing at in tellus integer feugiat scelerisque varius. Sed vulputate mi sit<br /> 
                        amet. Quis lectus nulla at volutpat diam ut venenatis tellus.
                    </p>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <TabFiveCard
                            key={index}
                            mainImg={service.imgSrc}
                            title={service.title}
                            description={service.description}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection2;
