import React from 'react';
import { Link } from 'react-router-dom';

const FooterWithNewsLetter = ({footerModifyClass,footerLogo,footerStyleClass}) => {
    return (
        <footer id="rs-footer" className={`rs-footer footer-main-home ${footerModifyClass ? footerModifyClass : 'footer-modify1'} ${footerStyleClass?footerStyleClass:''}`}>
            <div className="footer-overlay"></div>
            <div className="container custom8">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 md-mb-30">
                            <div className="footer-logo">
                                <Link to="/"><img src={footerLogo} alt="Logo" /></Link>
                            </div>
                            <p className="description">
                                Fermentum odio eu feugiat pretiums nibh. Dolor sit consectetur adipiscini over the aenean bcom here.
                            </p>
                            <ul className="footer-social">
                                <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                                <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                                <li><Link to="#"><i className="ri-instagram-fill"></i></Link></li>
                                <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 pl-65 md-pl-15 md-mb-30">
                            <h5 className="footer-title">Company</h5>
                            <ul className="site-map">
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/services-1">Services</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/blog-standard">Blog Standard</Link></li>
                                <li><Link to="/contact-1">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 pl-70 md-pl-15 sm-mb-30">
                            <h5 className="footer-title">Solutions</h5>
                            <ul className="site-map">
                                <li><Link to="/advanced-analytic">Advanced Analytic</Link></li>
                                <li><Link to="/business-services">Business Services</Link></li>
                                <li><Link to="/consulting-services">Consulting Services</Link></li>
                                <li><Link to="/consumer-product">Consumer Product</Link></li>
                                <li><Link to="/financial-services">Financial Services</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="newsletter-wrap">
                                <h2 className="title">Newsletter</h2>
                                <div className="description">
                                    <p>You will get weekly update on Email</p>
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
        </footer>
    );
};

export default FooterWithNewsLetter;