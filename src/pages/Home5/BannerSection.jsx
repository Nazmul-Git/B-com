import React from 'react';
import mainImage from '../../assets/images/banner/style5/img-1.png';
import shapeLove from '../../assets/images/banner/style5/love-1.png';
import shapeOne from '../../assets/images/banner/style5/shape-1.png';
import shapeTwo from '../../assets/images/banner/style5/shape-2.png';
import shapeThree from '../../assets/images/banner/style5/shape-3.png';
import Banner5 from '../../components/Banner/Banner5';

const BannerSection = () => {
    return (
        <Banner5
            mainImage={mainImage}
            shapeLove={shapeLove}
            shapeOne={shapeOne}
            shapeTwo={shapeTwo}
            shapeThree={shapeThree}
        />
    );
};

export default BannerSection;