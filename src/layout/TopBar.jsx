import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const TopBar = ({ topbarClass, toplbarLayout1, toplbarLayout3, contactNumber, mailAddress, mapAddress, toplbarLayout4 }) => {

  return (
    <div className={`toolbar-area ${topbarClass ? topbarClass : ''} hidden-md`}>
      <div className="container custom13">
        <div className="row y-middle">
          {
            toplbarLayout4 &&
            <>
              <div className="col-lg-6">
                <div className="toolbar-area">
                  <span>Since 2000 we are leading business consulting company.</span>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="toolbar-sl-share">
                  <li className="opening"><i className="ri-alarm-line"></i><span className="des">Office Hours: 09:00 - 17:00</span></li>
                  <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                  <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                  <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                </ul>
              </div>
            </>
          }

          {
            toplbarLayout3 &&
            <>
              <div className="col-lg-8">
                <ul className="address-contact-box">
                  {
                    mapAddress &&
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
                  }
                  {
                    mailAddress &&
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
                  }
                  {
                    contactNumber &&
                    <li>
                      <div className="address-item">
                        <div className="address-icon">
                          <i className="ri-phone-line"></i>
                        </div>
                        <div className="address-text">
                          <Link to="tel:+(00)123456789">(00) 123 456 789</Link>
                        </div>
                      </div>
                    </li>
                  }
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="toolbar-wrap text-right">
                  <ul className="sl-share-icon">
                    <li className="follow-text"><span>Follow Us :</span></li>
                    <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                    <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                    <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                    <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
                  </ul>
                </div>
              </div>
            </>
          }
          {
            toplbarLayout1 &&
            <>
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
            </>
          }

        </div>
      </div>
    </div>
  );
};

export default TopBar;
