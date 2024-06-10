import React from 'react';
import Banner from '../../components/Banner/Banner';

const BannerSection = ({ bannerClass,containerClass,circleImg }) => {
    return (
        <Banner
            bannerClass={bannerClass}
            containerClass={containerClass}
            circleImg={circleImg}
            title='Your Vision Our Passion.'
            details='Collaboratively administrate empowered markets via plug-and -play networks. Dynamically procraste customer.'
            btnTitle='Get a Quote'
        />
    );
};

export default BannerSection;
