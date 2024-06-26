import React from 'react';
import BannerContent from '../../components/Banner/BannerContent';
import BannerImage from '../../components/Banner/BannerImage';
import mainImage from '../../assets/images/banner/style7/bnr-img.png';
import shape1 from '../../assets/images/banner/style7/shape-1.png';
import shape2 from '../../assets/images/banner/style7/shape-2.png';

const BannerSection = () => {
    return (
        <div className="rs-banner banner-style8">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <BannerContent
                            subTitle="Hello, I am Mariya Nike"
                            title="We turn Your Ideas, or Story into a Bestselling Business Book"
                            description="Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Nunc mattis enim ut tellus elementum sagittis vitae morbi enim nunc faucibus."
                            buttonText="Free Download"
                            buttonLink="/contact-us-1"
                        />
                    </div>
                    <div className="col-lg-5">
                        <BannerImage
                            mainImage={mainImage}
                            shape1={shape1}
                            shape2={shape2}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
