import React from 'react';
import Slider from '../../components/Slider/Slider';
import sliderImage1 from '../../assets/images/slider/style2/dots-bnr-3-1.png';
import sliderImage2 from '../../assets/images/slider/style2/dots-bnr-3-2.png';

const SliderSection = () => {
    const sliderData = [
        {
            sliderClass: '',
            watermark: 'Welcome',
            title: 'We bring solutions to make life easier for your business.',
            details: 'We perform full analysis of the client’s website and collect information about the competitors. ',
            sliderImage1: sliderImage1,
            sliderImage2: sliderImage2,
        },
        {
            sliderClass: 'slide-bg2',
            watermark: 'Best Consulting Company',
            title: 'We bring solutions to make life easier for your business.',
            details: 'We perform full analysis of the client’s website and collect information about the competitors. ',
            sliderImage1: sliderImage1,
            sliderImage2: sliderImage2,
        },
        {
            sliderClass: 'slide-bg3',
            watermark: 'Best Consulting Company',
            title: 'We bring solutions to make life easier for your business.',
            details: 'We perform full analysis of the client’s website and collect information about the competitors. ',
            sliderImage1: sliderImage1,
            sliderImage2: sliderImage2,
        },
        // Add more slider data as needed
    ];
    return (
        <div className="rs-slider slider-style2">
            <div className="slider slider-slide-1">
                <Slider
                   sliderData={sliderData}
                   showPagination={true}
                   custom={'custom13'}
                   slider1={true}
                />
            </div>
        </div>
    );
};

export default SliderSection;
