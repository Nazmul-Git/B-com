import React from 'react';
import { Link } from 'react-router-dom';

const Partner = ({ logo,colClass }) => {
    return (
        <div className={`${colClass ? colClass :'col-lg-4' } col-md-6 col-sm-6 col-6 logo-grid-item`}>
            <div className="partner-item">
                <div className="logo-img">
                    <Link to={logo.Link}>
                        <img className="hovers-logos" src={logo.src} alt={logo.alt} />
                        <img className="mains-logos" src={logo.src} alt={logo.alt} />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Partner;