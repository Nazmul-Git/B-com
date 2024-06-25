import React from 'react';
import borderLine from '../../assets/images/banner/style6/border-line.png';
import img1 from '../../assets/images/banner/style6/img-1.png';
import img2 from '../../assets/images/banner/style6/img-2.png';
import img3 from '../../assets/images/banner/style6/img-3.png';
import img4 from '../../assets/images/banner/style6/img-4.png';
import { Link } from 'react-router-dom';

const Banner7 = () => {
    return (
        <div className="rs-banner banner-style7">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <div className="content-wrap">
                            <h1 className="title wow fadeInDown">
                                Make Easier Your Payment With <span>Fintech</span>
                                <img src={borderLine} alt="border line" />
                            </h1>
                            <div className="description wow fadeInLeft2">
                                <p>
                                    Laoreet non curabitur gravida arcu ac tortor dignissim convallis Nunc<br />
                                    mattis enim ut tellus elementum sagittis vitae morbi.
                                </p>
                            </div>
                            <div className="bnr-btn wow fadeInUp">
                                <Link className="readon consultant get-pink" to="/contact-us-1">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bnr-images">
                            <div className="images-wrap one">
                                <img className="wow fadeInDown" src={img1} alt="img1" />
                            </div>
                            <div className="images-wrap two">
                                <img className="wow fadeInRight" src={img2} alt="img2" />
                            </div>
                            <div className="images-wrap three">
                                <img className="wow fadeInUp" src={img3} alt="img3" />
                            </div>
                            <div className="images-wrap four">
                                <img className="wow fadeInRight2" src={img4} alt="img4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner7;
