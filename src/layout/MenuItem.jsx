import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = () => {
    return (
        <>
            <li className="menu-item-has-children current-menu-item">
                <Link to="/index">Home</Link>
                <ul className="sub-menu">
                    <li className="menu-item-has-children current-menu-item">
                        <Link to="#">Multipages</Link>
                        <ul className="sub-menu">
                            <li className="active"><Link to="/index">Consulting Business</Link> </li>
                            <li><Link to="/index-2">Corporate Business</Link> </li>
                            <li><Link to="/index-3">Business Consulting 1</Link> </li>
                            <li><Link to="/index-4">Business Consulting 2</Link> </li>
                            <li><Link to="/index-5">Insurance Business</Link> </li>
                            <li><Link to="/index-6">Marketing Consultant</Link> </li>
                            <li><Link to="/index-7">Fintech</Link> </li>
                            <li><Link to="/index-8">Digital Business</Link> </li>
                            <li><Link to="/index-9">Personal Advisor</Link> </li>
                            <li><Link to="/index-10">Finance Consulting</Link> </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <Link to="#">Onepages</Link>
                        <ul className="sub-menu">
                            <li><Link to="/onepage-1">Onepage Consulting</Link> </li>
                            <li><Link to="/onepage-2">Onepage Corporate</Link> </li>
                            <li><Link to="/onepage-3">Onepage Consulting 1</Link> </li>
                            <li><Link to="/onepage-4">Onepage Consulting 2</Link> </li>
                            <li><Link to="/onepage-5">Onepage Insurance</Link> </li>
                            <li><Link to="/onepage-6">Onepage Marketing</Link> </li>
                            <li><Link to="/onepage-7">Onepage Fintech</Link> </li>
                            <li><Link to="/onepage-8">Onepage Digital</Link> </li>
                            <li><Link to="/onepage-9">Onepage Personal</Link> </li>
                            <li><Link to="/onepage-10">Onepage Finance</Link> </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/about-us">About Us</Link>
            </li>
            <li className="menu-item-has-children">
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                    <li><Link to="/team">Team</Link></li>
                    <li className="last-item menu-item-has-children">
                        <Link to="#">Portfolio</Link>
                        <ul className="sub-menu">
                            <li><Link to="/portfolio-01">Portfolio 01</Link></li>
                            <li><Link to="/portfolio-02">Portfolio 02</Link></li>
                            <li><Link to="/portfolio-03">Portfolio 03</Link></li>
                            <li><Link to="/portfolio-filter">Portfolio Filter</Link></li>
                            <li><Link to="/portfolio-single">Portfolio Single</Link></li>
                        </ul>
                    </li>
                    <li className="last-item menu-item-has-children">
                        <Link to="#">Pricing Plan</Link>
                        <ul className="sub-menu">
                            <li><Link to="/pricing-plan-01">Pricing Plan 01</Link></li>
                            <li><Link to="/pricing-plan-02">Pricing Plan 02</Link></li>
                            <li><Link to="/pricing-plan-02">Pricing Plan 03</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/faq">Faqs</Link></li>
                    <li><Link to="/partners">Partners</Link></li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <Link to="#">Services</Link>
                <ul className="sub-menu">
                    <li><Link to="/services-style-1">Service style 1</Link></li>
                    <li><Link to="/services-style-2">Services style 2</Link></li>
                    <li><Link to="/services-style-3">Services style 3</Link></li>
                    <li><Link to="/services-style-4">Services style 4</Link></li>
                    <li><Link to="/services-style-5">Services style 5</Link></li>
                    <li><Link to="/services-style-6">Services style 6</Link></li>
                    <li><Link to="/services-style-7">Services style 7</Link></li>
                    <li className="last-item menu-item-has-children">
                        <Link to="#">Service Tab Styles</Link>
                        <ul className="sub-menu">
                            <li><Link to="/advance-tab-service-01">Advance Tab Service 01</Link></li>
                            <li><Link to="/advance-tab-service-02">Advance Tab Service 02</Link></li>
                        </ul>
                    </li>
                    <li className="last-item menu-item-has-children">
                        <Link to="#">Service Details</Link>
                        <ul className="sub-menu">
                            <li><Link to="/consulting-services">Consulting Services</Link></li>
                            <li><Link to="/advanced-analytic">Advanced Analytic</Link></li>
                            <li><Link to="/business-services">Business Services</Link></li>
                            <li><Link to="/consumer-product">Consumer Product</Link></li>
                            <li><Link to="/financial-advisory">Financial Advisory</Link></li>
                            <li><Link to="/investment-advisory">Investment Advisory</Link></li>
                            <li><Link to="/quality-resourcing">Quality Resourcing</Link></li>
                            <li><Link to="/security-services">Security Services</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                    <li><Link to="/blog-standard">Blog Standard</Link></li>
                    <li><Link to="/blog-grid-style-1">Blog Grid Style 1</Link></li>
                    <li><Link to="/blog-grid-style-2">Blog Grid Style 2</Link></li>
                    <li><Link to="/blog-slider-style">Blog Slider Style</Link></li>
                    <li><Link to="/blog-single">Blog Single</Link></li>
                </ul>
            </li>
            <li className="last-item menu-item-has-children">
                <Link to="#">Shop</Link>
                <ul className="sub-menu">
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/shop-single">Shop Single</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                    <li><Link to="/my-account">My Account</Link></li>
                </ul>
            </li>
            <li className="last-item menu-item-has-children">
                <Link to="#">Contact</Link>
                <ul className="sub-menu">
                    <li><Link to="/contact-us-1">Contact Us 1</Link></li>
                    <li><Link to="/contact-us-2">Contact Us 2</Link></li>
                    <li><Link to="/contact-us-3">Contact Us 3</Link></li>
                </ul>
            </li>
        </>
    );
};

export default MenuItem;
