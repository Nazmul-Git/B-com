import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Banner5 = ({ mainImage, shapeLove, shapeOne, shapeTwo, shapeThree }) => {

    return (
        <div className="rs-banner banner-style6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle
                            mainClass={'content-wrap'}
                            title={'Insurance Protect Your Family'}
                            details={' For over 45 years, millions of families have looked to us to protect what matters most. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,'}
                            detailClass={'text-white'}
                            btnPart={true}
                            btnClass={'bnr-btn'}
                            linkClass={'readon consultant get-green'}
                            href={'/contact-us-1'}
                            linkTitle={'Get a Quote'}
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-images">
                            <div className="image-wrap">
                                <img className="wow fadeInUp" src={mainImage} alt="Images" />
                                <div className="images-shape one">
                                    <img className="scale2" src={shapeLove} alt="Images" />
                                </div>
                                <div className="images-shape two">
                                    <img className="horizontal" src={shapeOne} alt="Images" />
                                </div>
                                <div className="images-shape three">
                                    <img className="veritcal" src={shapeTwo} alt="Images" />
                                </div>
                                <div className="images-shape four">
                                    <img className="scale" src={shapeThree} alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner5;