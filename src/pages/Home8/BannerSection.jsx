import React from 'react';
import MainImage from '../../assets/images/banner/style1/image-1.jpg'; 
import DotImage from '../../assets/images/banner/style1/dot-1.png'; 
import Banner8 from '../../components/Banner/Banner8';

const BannerSection = () => {
    return (
        <Banner8
            title="Business From Idea to"
            description="Leverage agile frameworks to provide a robust synopsis for high level overviews approaches to corporate strategy proposition."
            buttonText="Get Free Consultant"
            buttonLink="/contact-us-1"
            phoneNumber="(00) 123 456 789"
            phoneLink="/contact-us-1"
            mainImage={MainImage}
            dotImage={DotImage}
            emergencyLabel="Emergency Help?"

        />
    );
};

export default BannerSection;
