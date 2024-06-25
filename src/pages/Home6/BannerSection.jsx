import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import BannerImage from '../../assets/images/banner/banner3-img3.png'
import Banner6 from '../../components/Banner/Banner6';

const BannerSection = () => {


    return (
        <Banner6
            subTitle="We are the best"
            title="Expert marketing consulting grow your business"
            description="Laor eet non curabitur gravida arcu ac tortor dignissim convallis. Nunc mattis enim ut tellus elementum sagittis vitae et leo morbi"
            buttonText="Get Free Consultant"
            buttonLink="/contact-us-1"
            videoUrl="https://www.youtube.com/watch?v=FMvA5fyZ338"
            videoButtonText="Watch Demo"
            bannerImage={BannerImage}
        />
    );
};

export default BannerSection;
