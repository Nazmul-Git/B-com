import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopUp from '../../components/Modal/VideoPopUp';

const Banner10 = ({ leftImage, rightImage, arrowImage, videoUrl }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-banner banner-style4">
            <div className="container">
                <div className="content-wrap">
                    <span className="sub-title">Becoming a Great Investor</span>
                    <h1 className="title">Invest Savings For<br />Future Costing.</h1>
                    <div className="description">
                        <p>
                            Capitalize on low hanging fruit to identify a ballpark value added<br />
                            activity to beta test digital with from DevOps.
                        </p>
                    </div>
                    <ul className="bnr-btn wow fadeInUp">
                        <li>
                            <Link className="readon consultant discover" to="/contact-us-1">Discover More</Link>
                        </li>
                        <li>
                            <div className="rs-videos mt--5">
                                <div className="animate-border animate-style3">
                                    <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                        <i className="ri-play-fill"></i>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="banner-images">
                    <div className="col-lg-6">
                        <div className="image-wrap left-img">
                            <img src={leftImage} alt="Left Banner" />
                        </div>
                        <div className="arrow-shape">
                            <img src={arrowImage} alt="Arrow" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-wrap right-img">
                            <img src={rightImage} alt="Right Banner" />
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl={videoUrl} />
        </div>
    );
};

export default Banner10;
