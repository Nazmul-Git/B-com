import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const FooterWithNewsLetter2 = ({ footerClass, footerStyleClass, footerLogo }) => {
    return (
        <footer id="rs-footer" className={`rs-footer footer-main-home ${footerStyleClass ? footerStyleClass : 'footer-modify1'} ${footerClass ? footerClass : 'footer-black1'}`}>
            <div className="footer-overlay"></div>
            <div className="container custom8">
                <div className="footer-top">
                    <div className="row y-middle">
                        <div className="col-lg-4 md-mb-30 pl-60 md-pr-15">
                            <div className="contact-wrap">
                                <div className="footer-logo">
                                    <Link to="/"><img src={footerLogo} alt="Logo" /></Link>
                                </div>
                                <div className="address-box mb-12">
                                    <div className="address-icon">
                                        <i className="ri-map-pin-2-line"></i>
                                    </div>
                                    <div className="address-text">
                                        <div className="text">
                                            <span className="des">
                                                Lake view road 366 wilshire, New<br />
                                                polysma 90024/3. USA
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
                                            <Link to="mailto:info@yourmail.com">info@yourmail.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <ul className="footer-social-wrap">
                                    <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3 pl-60 md-pl-15">
                                    <h5 className="footer-title">Company</h5>
                                    <ul className="site-map">
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li><Link to="/services-1">Services</Link></li>
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/blog-standard">Blog Standard</Link></li>
                                        <li><Link to="/contact-1">Contact Us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3">
                                    <h5 className="footer-title">Solutions</h5>
                                    <ul className="site-map">
                                        <li><Link to="/advanced-analytic">Advanced Analytic</Link></li>
                                        <li><Link to="/business-services">Business Services</Link></li>
                                        <li><Link to="/consulting-services">Consulting Services</Link></li>
                                        <li><Link to="/consumer-product">Consumer Product</Link></li>
                                        <li><Link to="/financial-services">Financial Services</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 md-mt-20">
                                    <div className="newsletter-wrap">
                                        <h5 className="footer-title">Newsletter</h5>
                                        <div className="description">
                                            <p>Subscribe to our newsletter<br />
                                                and get latest updates.</p>
                                        </div>
                                        <div className="newsletter-form">
                                            <div className="form-inner">
                                                <input id="news_email" type="email" name="email" placeholder="Email Address" required />
                                                <input className="submit_nl" type="submit" value="Subscribe" />
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
                                        <li><Link to="/contact-1">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="copyright text-lg-start text-center">
                                        <p>© 2023 Bcom. Designed By <a href="https://rstheme.com" target="_blank" rel="noopener noreferrer">RSTheme</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterWithNewsLetter2;
