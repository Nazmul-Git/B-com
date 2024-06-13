import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ footerLogo, footerClass, footerStyleClass, socialIcon, footerHomeMain, footerBtn }) => {
    return (
        <footer id="rs-footer" className={`rs-footer ${footerHomeMain ? footerHomeMain : ''} ${footerClass ? footerClass : 'footer-style1'} ${footerStyleClass ? footerStyleClass : ''}`}>
            <div className="container custom8">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3 md-mb-30">
                            <div className="footer-logo">
                                <Link to="/"><img src={footerLogo} alt="Logo" /></Link>
                            </div>
                            <p className="description">Fermentum odio eu feugiat pretium nibh. Dolor sit consectetur adipiscing. Over the aenean for pharetra.</p>
                            {
                                socialIcon &&
                                <ul className="footer-social">
                                    <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-instagram-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
                                </ul>
                            }
                            {
                                footerBtn &&
                                <div className="footer-btn">
                                    <Link className="readon started footer-more" to="/contact-us-1">
                                        <span className="btn-txt">Discover More</span>
                                        <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            }
                        </div>
                        <div className="col-lg-3 pl-110 md-pl-15">
                            <h5 className="footer-title">Company</h5>
                            <ul className="site-map">
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/services-style-1">Services</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/blog-standard">Blog Standard</Link></li>
                                <li><Link to="/contact-us-1">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="footer-title">Services</h5>
                            <ul className="site-map">
                                <li><Link to="/advanced-analytic">Advanced Analytic</Link></li>
                                <li><Link to="/business-services">Business Services</Link></li>
                                <li><Link to="/consulting-services">Consulting Services</Link></li>
                                <li><Link to="/consumer-product">Consumer Product</Link></li>
                                <li><Link to="/financial-services">Financial Services</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="footer-title">Contact Us</h5>
                            <div className="contact-box">
                                <div className="address-box mb-12">
                                    <div className="address-icon">
                                        <i className="ri-phone-line"></i>
                                    </div>
                                    <div className="address-text">
                                        <div className="text">
                                            <Link to="tel:+555567812340">+555 5678 12340</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="address-box mb-12">
                                    <div className="address-icon">
                                        <i className="ri-mail-send-line"></i>
                                    </div>
                                    <div className="address-text">
                                        <div className="text">
                                            <Link to="mailto:support@rstheme.com">support@rstheme.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="address-box mb-12">
                                    <div className="address-icon">
                                        <i className="ri-map-pin-line"></i>
                                    </div>
                                    <div className="address-text">
                                        <div className="text">
                                            <span className="des">
                                                25 San Fairport, US 1565 United State City
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="address-box">
                                    <div className="address-icon">
                                        <i className="ri-global-line"></i>
                                    </div>
                                    <div className="address-text">
                                        <div className="text">
                                            <span className="des">
                                                yourdomainname.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-border">
                        <div className="row y-middle">
                            <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                                <ul className="copy-right-menu">
                                    <li><Link to="/about-us">About</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/blog-standard">Blog Standard</Link></li>
                                    <li><Link to="/contact-us-1">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="copyright text-lg-start text-center">
                                    <p>© 2023 Bcom. Designed By <Link to="https://rstheme.com" target="_blank">RSTheme</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
