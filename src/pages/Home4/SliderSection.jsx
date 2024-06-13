import React from 'react';
import Slider from '../../components/Slider/Slider';
import sliderImage1 from '../../assets/images/slider/style2/dots-bnr-3-1.png';
import sliderImage2 from '../../assets/images/slider/style2/dots-bnr-3-2.png';

const SliderSection = () => {
    const sliderData = [
        {
            sliderClass: '',
            watermark: 'Welcome',
            title: 'We Boosts Your',
            details: 'Business ',
            sliderImage1: sliderImage1,
            sliderImage2: sliderImage2,
        },
        {
            sliderClass: 'slide-bg2',
            watermark: 'Welcome',
            title: 'We Boosts Your',
            details: 'Business ',
            sliderImage1: sliderImage1,
            sliderImage2: sliderImage2,
        },
        // Add more slider data as needed
    ];
    return (
        <div className="rs-slider slider-style1">
            <div className="slider slider-slide-1">
                <Slider
                    sliderData={sliderData}
                    showPagination={true}
                    slider4={true}
                />
            </div>
        </div>
    );
};

export default SliderSection;