import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopUp from '../../components/Modal/VideoPopUp';

const CTA_Section = ({ title, dotImage, details }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-cta cta-main-home cta-style6 bg28 pt-120 pb-110 md-pt-80">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className="col-lg-7 md-mb-80">
                        <div className="sec-title">
                            <h2 className="title title11 white-subnormal white-color pb-20">
                                {title}
                            </h2>
                            <p className="desc desc8 white-color2 pb-38">
                                {details}
                            </p>
                            <div className="btn-part">
                                <Link className="readon started phone-number cta-phone" to="/contact-us-1">
                                    <span className="btn-icon">
                                        <i className="ri-phone-fill"></i>
                                    </span>
                                    <span className="btn-text">(00) 123 456 789</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 text-right">
                        <div className="rs-videos video-style1 white-video1">
                            <div className="video-item">
                                <div onClick={openVideoPopup} className="overly-border">
                                    <Link className="popup-border popup-videos" to="">
                                        <i className="ri-play-fill"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animate-wrap">
                    <img className="veritcal2" src={dotImage} alt="Images" />
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/watch?v=FMvA5fyZ338" />
        </div>
    );
};

export default CTA_Section;
