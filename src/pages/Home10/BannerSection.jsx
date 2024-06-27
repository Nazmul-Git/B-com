import React from 'react';
import Banner10 from '../../components/Banner/Banner10';
import leftImage from '../../assets/images/banner/style3/images-1.png';
import rightImage from '../../assets/images/banner/style3/images-2.png';
import arrowImage from '../../assets/images/banner/style3/arrow.png';

const BannerSection = () => {
    return (
        <>
            <Banner10
                leftImage={leftImage}
                rightImage={rightImage}
                arrowImage={arrowImage}
                videoUrl={"https://www.youtube.com/watch?v=FMvA5fyZ338"}
            />
        </>
    );
};

export default BannerSection;