import React from 'react';

const BannerImage = ({ mainImage, shape1, shape2 }) => {
    return (
        <div className="bnr-images">
            <div className="images-wrap">
                <img className="wow fadeInUp" src={mainImage} alt="Images" />
                <div className="shape-img one">
                    <img className="veritcal3" src={shape1} alt="Images" />
                </div>
                <div className="shape-img two">
                    <img className="horizontal" src={shape2} alt="Images" />
                </div>
            </div>
        </div>
    );
};

export default BannerImage;
