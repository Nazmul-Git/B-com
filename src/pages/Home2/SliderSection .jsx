import React from 'react';
import Slider2 from '../../components/Slider/Slider2';
import dots from '../../assets/images/slider/style3/dots.png'
import circle from '../../assets/images/slider/style3/circle.png'
import shape2 from '../../assets/images/slider/style3/shape-2.png';
import shape1 from '../../assets/images/slider/style3/shape-1.png';

const SliderSection = () => {
    const sliderData = [
        {
            sliderClass: '',
            title: "We Will Help Your Company Grow Faster",
            details: "We place you at the centre of international networks to advance your strategic aliquet nec ullamcorper intereste elementum vitae.",
            buttonText: "Get Started",
            image1: shape1,
            image2: shape2,
            buttonLink: "/contact-us-1"
        },
        {
            sliderClass: 'slide-bg2',
            title: "Reach Your Desired Goal with help of Us",
            details: "We place you at the centre of international networks to advance your strategic aliquet nec ullamcorper intereste elementum vitae.",
            buttonText: "Get Started",
            image1: shape1,
            image2: shape2,
            buttonLink: "/contact-us-1"
        },
        {
            sliderClass: 'slide-bg3',
            title: "Do What You Can, With What You Have",
            details: "We place you at the centre of international networks to advance your strategic aliquet nec ullamcorper intereste elementum vitae.",
            buttonText: "Get Started",
            image1: shape1,
            image2: shape2,
            buttonLink: "/contact-us-1"
        }
    ];

    return (
        <div className="rs-slider slider-style3">
            <div className="slider slider-slide-1">
                <Slider2
                    sliderData={sliderData}
                    dots={dots}
                    circle={circle}
                    showPagination={true}
                />
            </div>
        </div>
    );
};

export default SliderSection;