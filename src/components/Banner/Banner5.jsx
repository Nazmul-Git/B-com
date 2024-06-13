import React from 'react';
import { Link } from 'react-router-dom';

const Banner5 = ({ mainImage, shapeLove, shapeOne, shapeTwo, shapeThree }) => {

    return (
        <div className="rs-banner banner-style6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-wrap">
                            <h1 className="title">Insurance Protect Your Family</h1>
                            <div className="description">
                                <p>
                                    For over 45 years, millions of families have looked to us to protect what matters most. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                </p>
                            </div>
                            <div className="bnr-btn">
                                <Link className="readon consultant get-green" to="/contact-us-1">Get a Quote</Link>
                            </div>
                        </div>
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