import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({ member,isOpen,setOpen }) => {
    const toggleOpen=()=>{
        setOpen(!isOpen);
    };
    
    return (
        <div className="col-xl-3 col-md-6 xl-mb-30">
            <div className="team-item-wrap">
                <div className={`team-inner-wrap ${isOpen ? 'is-open' : ''}`}>
                    <div className="image-wrap">
                        <Link to="/team-single">
                            <img src={member.imgSrc} alt={`${member.name}`} />
                        </Link>
                        <span className="team-social-collaps" onClick={toggleOpen}>
                            <i className="fi fi-rr-share share-i ri-share-line"></i>
                        </span>
                        <div className="plus-team">
                            <span className="share-excerpt">Follow Me-</span>
                            <div className="social-icons1">
                                <Link to={member.socialLinks.facebook} className="social-icon"><i className="ri-facebook-fill"></i></Link>
                                <Link to={member.socialLinks.twitter} className="social-icon"><i className="ri-twitter-fill"></i></Link>
                                <Link to={member.socialLinks.linkedin} className="social-icon"><i className="ri-linkedin-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="team-content">
                        <h5 className="team-name"><Link to="/team-single">{member.name}</Link></h5>
                        <span className="testi-title">{member.title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
