import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import banner3 from '../../assets/images/banner/banner3-img3.png'
import VideoPopUp from '../../components/Modal/VideoPopUp';

const BannerSection = () => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-banner banner-style2">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-5">
                        <div className="bnr-images">
                            <img className="wow fadeInUp" src={banner3} alt="Images" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="content-wrap">
                            <span className="sub-title wow fadeInDown">We are the best</span>
                            <h1 className="title wow fadeInRight pb-25">Expert marketing consulting grow your business</h1>
                            <div className="description wow fadeInRight2">
                                <p>
                                    Laor eet non curabitur gravida arcu ac tortor dignissim convallis. Nunc mattis enim ut tellus elementum sagittis vitae et leo morbi
                                </p>
                            </div>
                            <ul className="bnr-btn wow fadeInUp">
                                <li>
                                    <Link className="readon consultant get-orange" to="/contact-us-1">Get Free Consultant</Link>
                                </li>
                                <li>
                                    <div className="rs-videos mt--5">
                                        <div className="animate-border animate-style1">
                                            <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                                <i className="ri-play-fill"></i>
                                                <span className="btn-text">Watch Demo</span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/watch?v=FMvA5fyZ338" />
        </div>
    );
};

export default BannerSection;
