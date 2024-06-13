import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import VideoPopUp from '../../components/Modal/VideoPopUp';

const VideoSection = ({title,details}) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-videos video-style2 woman-video1">
            <div className="row">
                <div className="col-lg-5">
                    <div className="video-item">
                        <div className="animate-border2">
                            <button onClick={openVideoPopup} className="popup-border popup-videos">
                                <i className="ri-play-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="divider-separator video-widget-top">
                        <div className="content-wrap">
                            <div className="sec-title">
                                <h2 className="title title11 white-subnormal white-color pb-20">
                                    {title}
                                </h2>
                                <p className="desc desc8 white-color2 pb-38">
                                   {details}
                                </p>
                                <div className="btn-part">
                                    <Link className="readon started phone-number cta-phone2" to="/contact-us-1">
                                        <span className="btn-icon">
                                            <i className="ri-phone-line"></i>
                                        </span>
                                        <span className="btn-text">(03) 123 456 7893</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp 
                isOpen={isVideoOpen} 
                onRequestClose={closeVideoPopup} 
                videoUrl="https://www.youtube.com/embed/FMvA5fyZ338" 
            />
        </div>
    );
};

export default VideoSection;
