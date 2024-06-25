import React from 'react';
import { Link } from 'react-router-dom';

const Footer4 = ({ footerLogo, footerStyleClass, footerModifyClass, btnClass }) => {
    return (
        <footer id="rs-footer" className={`rs-footer ${footerStyleClass ? footerStyleClass : 'footer-style2'} ${footerModifyClass ? footerModifyClass : ''}`}>
            <div className="container custom8">
                <div className="footer-top">
                    <div className="row y-middle">
                        <div className="col-lg-4 md-mb-30 pr-60 md-pr-15">
                            <div className="footer-logo">
                                <Link to="/"><img src={footerLogo} alt="Logo" /></Link>
                            </div>
                            <p className="description">We are the world best consulting business company since 2005 and serving many world class company over the world.</p>
                            <div className="footer-btn">
                                <Link className={`readon started footer-more ${btnClass ? btnClass : ''}`} to="/contact-us-1">
                                    <span className="btn-txt">Discover More</span>
                                    <i className="ri-arrow-right-fill"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="widget-wrap">
                                <div className="background-overlay"></div>
                                <div className="row">
                                    <div className="col-lg-4 md-mb-10">
                                        <h5 className="footer-title">Company</h5>
                                        <ul className="site-map">
                                            <li><Link to="/about-us">About Us</Link></li>
                                            <li><Link to="/services-1">Services</Link></li>
                                            <li><Link to="/faq">FAQ</Link></li>
                                            <li><Link to="/blog-standard">Blog Standard</Link></li>
                                            <li><Link to="/contact-1">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 md-mb-10">
                                        <h5 className="footer-title">Solutions</h5>
                                        <ul className="site-map">
                                            <li><Link to="/advanced-analytic">Advanced Analytic</Link></li>
                                            <li><Link to="/business-services">Business Services</Link></li>
                                            <li><Link to="/consulting-services">Consulting Services</Link></li>
                                            <li><Link to="/consumer-product">Consumer Product</Link></li>
                                            <li><Link to="/financial-services">Financial Services</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="footer-title">Contact</h5>
                                        <div className="contact-box">
                                            <div className="address-box mb-12">
                                                <div className="address-icon">
                                                    <i className="ri-phone-fill"></i>
                                                </div>
                                                <div className="address-text">
                                                    <div className="text">
                                                        <Link to="tel:+555567812340">+555 5678 12340</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="address-box mb-12">
                                                <div className="address-icon">
                                                    <i className="ri-map-pin-fill"></i>
                                                </div>
                                                <div className="address-text">
                                                    <div className="text">
                                                        <span className="des">
                                                            3500 M. River Rd. New Work
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="address-box">
                                                <div className="address-icon">
                                                    <i className="ri-mail-fill"></i>
                                                </div>
                                                <div className="address-text">
                                                    <div className="text">
                                                        <Link to="mailto:info@yourmail.com">info@yourmail.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="footer-social">
                                            <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                            <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                                            <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                                            <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
                                        </ul>
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
                                    <li><Link to="/contact-1">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="copyright text-lg-start text-center">
                                    <p>© 2023 Bcom. Designed By <a href="https://rstheme.com" target="blank">RSTheme</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer4;
