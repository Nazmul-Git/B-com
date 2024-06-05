import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const TopBar = ({topbarClass}) => {

  return (
    <div className={`toolbar-area ${topbarClass ? topbarClass : ''} hidden-md"`}>
      <div className="container custom13">
        <div className="row y-middle">
          <div className="col-lg-4">
            <div className="toolbar-wrap">
              <ul className="sl-share-icon">
                <li className="follow-text"><span>Follow Us :</span></li>
                <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <ul className="address-contact-box">
              <li>
                <div className="address-item">
                  <div className="address-icon">
                    <i className="ri-map-pin-2-line"></i>
                  </div>
                  <div className="address-text">
                    <span className="des">
                      255 Sheet, New square, NY
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="address-item">
                  <div className="address-icon">
                    <i className="ri-mail-send-line"></i>
                  </div>
                  <div className="address-text">
                    <span className="des">
                      255 Sheet, New square, NY
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
