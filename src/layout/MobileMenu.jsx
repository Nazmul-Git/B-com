import React from 'react';

const MobileMenu = () => {
    return (
        <nav class="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
            <div class="close-btn">
                <a id="nav-close2" class="nav-close">
                    <div class="line">
                        <span class="line1"></span>
                        <span class="line2"></span>
                    </div>
                </a>
            </div>
            <ul class="nav-menu">
                <li class="menu-item-has-children current-menu-item">
                    <a href="index.html">Home</a>
                    <ul class="sub-menu">
                        <li class="menu-item-has-children current-menu-item">
                            <a href="#">Multipages</a>
                            <ul class="sub-menu">
                                <li class="active"><a href="index.html">Consulting Business</a> </li>
                                <li><a href="index-2.html">Corporate Business</a> </li>
                                <li><a href="index-3.html">Business Consulting 1</a> </li>
                                <li><a href="index-4.html">Business Consutling 2</a> </li>
                                <li><a href="index-5.html">Insurance Business</a> </li>
                                <li><a href="index-6.html">Marketing Consultant</a> </li>
                                <li><a href="index-7.html">Fintech</a> </li>
                                <li><a href="index-8.html">Digital Business</a> </li>
                                <li><a href="index-9.html">Personal Advisor</a> </li>
                                <li><a href="index-10.html">Finance Consulting</a> </li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#">Onepages</a>
                            <ul class="sub-menu">
                                <li><a href="onepage-1.html">Onepage Consulting</a> </li>
                                <li><a href="onepage-2.html">Onepage Corporate</a> </li>
                                <li><a href="onepage-3.html">Onepage Consulting 1</a> </li>
                                <li><a href="onepage-4.html">Onepage Consutling 2</a> </li>
                                <li><a href="onepage-5.html">Onepage Insurance</a> </li>
                                <li><a href="onepage-6.html">Onepage Marketing</a> </li>
                                <li><a href="onepage-7.html">Onepage Fintech</a> </li>
                                <li><a href="onepage-8.html">Onepage Digital</a> </li>
                                <li><a href="onepage-9.html">Onepage Personal</a> </li>
                                <li><a href="onepage-10.html">Onepage Finance</a> </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="about-us.html">About Us</a>
                </li>
                <li class="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul class="sub-menu">
                        <li><a href="team.html">Team</a></li>
                        <li class="last-item menu-item-has-children">
                            <a href="#">Portfolio</a>
                            <ul class="sub-menu">
                                <li><a href="portfolio-01.html">Portfolio 01</a></li>
                                <li><a href="portfolio-02.html">Portfolio 02</a></li>
                                <li><a href="portfolio-03.html">Portfolio 03</a></li>
                                <li><a href="portfolio-filter.html">Portfolio Filter</a></li>
                                <li><a href="portfolio-single.html">Portfolio Single</a></li>
                            </ul>
                        </li>
                        <li class="last-item menu-item-has-children">
                            <a href="#">Pricing Plan</a>
                            <ul class="sub-menu">
                                <li><a href="pricing-plan-01.html">Pricing Plan 01</a></li>
                                <li><a href="pricing-plan-02.html">Pricing Plan 02</a></li>
                                <li><a href="pricing-plan-02.html">Pricing Plan 03</a></li>
                            </ul>
                        </li>
                        <li><a href="faq.html">Faqs</a></li>
                        <li><a href="partners.html">Partners</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <a href="#">Services</a>
                    <ul class="sub-menu">
                        <li><a href="services-style-1.html">Service style 1</a></li>
                        <li><a href="services-style-2.html">Services style 2</a></li>
                        <li><a href="services-style-3.html">Services style 3</a></li>
                        <li><a href="services-style-4.html">Services style 4</a></li>
                        <li><a href="services-style-5.html">Services style 5</a></li>
                        <li><a href="services-style-6.html">Services style 6</a></li>
                        <li><a href="services-style-7.html">Services style 7</a></li>
                        <li class="last-item menu-item-has-children">
                            <a href="#">Service Tab Styles</a>
                            <ul class="sub-menu">
                                <li><a href="advance-tab-service-01.html">Advance Tab  Service 01</a></li>
                                <li><a href="advance-tab-service-01.html">Advance Tab  Service 02</a></li>
                            </ul>
                        </li>
                        <li class="last-item menu-item-has-children">
                            <a href="#">Service Details</a>
                            <ul class="sub-menu">
                                <li><a href="consulting-services.html">Consulting Services</a></li>
                                <li><a href="advanced-analytic.html">Advanced Analytic</a></li>
                                <li><a href="business-services.html">Business Services</a></li>
                                <li><a href="consumer-product.html">Consumer Product</a></li>
                                <li><a href="financial-advisory.html">Financial Advisory</a></li>
                                <li><a href="investment-advisory.html">Investment Advisory</a></li>
                                <li><a href="quality-resourcing.html">Quality Resourcing</a></li>
                                <li><a href="security-services.html">Security Services</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
                        <li><a href="blog-standard.html">Blog Standard</a></li>
                        <li><a href="blog-grid-style-1.html">Blog Grid Style 1</a></li>
                        <li><a href="blog-grid-style-2.html">Blog Grid Style 2</a></li>
                        <li><a href="blog-slider-style.html">Blog Slider Style</a></li>
                        <li><a href="blog-single.html">blog-single</a></li>
                    </ul>
                </li>
                <li class="last-item menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul class="sub-menu">
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="shop-single.html">Shop Single</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="my-account.html">My Account</a></li>
                    </ul>
                </li>
                <li class="last-item menu-item-has-children">
                    <a href="#">Contact</a>
                    <ul class="sub-menu">
                        <li><a href="contact-us-1.html">Contact Us 1</a></li>
                        <li><a href="contact-us-2.html">Contact Us 2</a></li>
                        <li><a href="contact-us-3.html">Contact Us 3</a></li>
                    </ul>
                </li>
            </ul>
            <div class="canvas-contact">
                <ul>
                    <li class="btn-signin">
                        <a class="signin-button" href="contact.html">
                            <span class="sign-text"><i class="ri-user-3-line"></i>Sign In</span>
                        </a>
                    </li>
                    <li class="btn-quote">
                        <a href="contact.html"><span class="btn-text"><i class="ri-download-line"></i> Download</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileMenu;