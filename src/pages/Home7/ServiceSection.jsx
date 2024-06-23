import React from 'react';
import icon1 from '../../assets/images/services/style6/ser-1.png';
import icon2 from '../../assets/images/services/style6/ser-2.png';
import icon3 from '../../assets/images/services/style6/ser-3.png';
import icon4 from '../../assets/images/services/style6/ser-4.png';
import TabFiveCard from '../../components/services/TabFiveCard';

const ServicesSection = () => {
    const servicesData = [
        {
            icon: icon1,
            title: "Register",
            description: "Massa tincidunt dui ut ornare lectus sit amet est placerat.",
            link: "/services-style-1"
        },
        {
            icon: icon2,
            title: "Recipient Info",
            description: "Massa tincidunt dui ut ornare lectus sit amet est placerat.",
            link: "/services-style-1"
        },
        {
            icon: icon3,
            title: "Add your Card",
            description: "Massa tincidunt dui ut ornare lectus sit amet est placerat.",
            link: "/services-style-1"
        },
        {
            icon: icon4,
            title: "Success",
            description: "Massa tincidunt dui ut ornare lectus sit amet est placerat.",
            link: "/services-style-1"
        }
    ];

    return (
        <div className="rs-services services-style5 services-modify3 pt-170 pb-140 md-pt-110 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-40">
                    <h2 className="title title5 heading-pink pb-25">
                        How it works?
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
                            mainImg={service.icon}
                            title={service.title}
                            description={service.description}
                            link={service.link}
                            colClass={'col-xl-3 col-md-6 xl-mb-30'}
                            otherClass={''}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
