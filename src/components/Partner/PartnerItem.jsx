import React from 'react';
import { Link } from 'react-router-dom';

const PartnerItem = ({ src, href, singleImage }) => {
    return (
        <div className="partner-item">
            <div className="logo-img">
                <Link to={href}>
                    {
                        singleImage ?
                            <img className="dance-pop" src={src} title="" alt=""></img>
                            :
                            <>
                                <img className="hovers-logos rs-grid-img" src={src} alt="Partner Logo" />
                                <img className="mains-logos rs-grid-img" src={src} alt="Partner Logo" />
                            </>
                    }
                </Link>
            </div>
        </div>
    );
};

export default PartnerItem;