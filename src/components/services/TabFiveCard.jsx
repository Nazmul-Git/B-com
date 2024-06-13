import React from 'react';
import { Link } from 'react-router-dom';

const TabFiveCard = ({ mainImg,title,description,link,colClass,otherClass }) => {
    return (
        <div className={`${colClass ? colClass : 'col-xl-3 col-md-6'} ${otherClass ? otherClass : 'mb-30'}`}>
            <div className="services-item">
                <div className="services-wrap">
                    <div className="services-icon">
                        <img src={mainImg} alt=""/>
                    </div>
                    <div className="services-content">
                        <h6 className="title"><Link to={link}>{title}</Link></h6>
                        <p className="services-txt">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabFiveCard;