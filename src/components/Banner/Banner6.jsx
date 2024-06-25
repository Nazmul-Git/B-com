import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import VideoPopUp from '../../components/Modal/VideoPopUp';

const Banner6 = ({
    subTitle,
    title,
    description,
    buttonText,
    buttonLink,
    videoUrl,
    videoButtonText,
    bannerImage
}) => {

    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-banner banner-style2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="bnr-images">
                            <img className="wow fadeInUp img-fluid" src={bannerImage} alt="Banner" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="content-wrap">
                            <span className="sub-title wow fadeInDown">{subTitle}</span>
                            <h1 className="title wow fadeInRight pb-25">{title}</h1>
                            <div className="description wow fadeInRight2">
                                <p>{description}</p>
                            </div>
                            <ul className="bnr-btn wow fadeInUp list-unstyled">
                                <li className="mb-3">
                                    <Link className="readon consultant get-orange btn btn-primary" to={buttonLink}>{buttonText}</Link>
                                </li>
                                <li>
                                    <div className="rs-videos mt--5">
                                        <div className="animate-border animate-style1">
                                            <Link onClick={openVideoPopup} className="popup-border popup-videos btn btn-secondary">
                                                <i className="ri-play-fill"></i>
                                                <span className="btn-text">{videoButtonText}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl={videoUrl} />
        </div>
    );
};

export default Banner6;