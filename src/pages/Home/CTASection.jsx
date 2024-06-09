import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import VideoPopUp from '../../components/Modal/VideoPopUp';

const CTASection = ({ arrow,spacingClass,title,titleClass,otherClass,dotImage }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-cta cta-main-home cta-style6 bg21 pt-100 pb-100 md-pt-80 md-pb-80">
            <div className="container custom10">
                <div className="row y-middle">
                    <div className={`col-lg-7 ${spacingClass ? spacingClass : 'md-mb-30'} `}>
                        <SectionTitle
                            title={title}
                            titleClass={titleClass}
                            otherClass={otherClass}
                        />
                    </div>
                    <div className="col-lg-5">
                        <ul className="cta-btn-wrap">
                            <li>
                                <div className="rs-videos mt--5">
                                    <div className="animate-border animate-style3 cta-phone">
                                        <Link onClick={openVideoPopup} className="popup-border popup-videos" to="">
                                            <i className="ri-play-line"></i>
                                            <span className="btn-text">(00) 123 456 789</span>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link className="readon consultant discover together" to="/contact-us-1">Let's work together</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="animate-arrow">
                <img src={arrow} alt="Images" />
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/watch?v=FMvA5fyZ338" />
        </div>
    );
};

export default CTASection;
