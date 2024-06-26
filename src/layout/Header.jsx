import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import TopBar from '../layout/TopBar';

const Header = ({ topbarClass,containerClass,otherClass, downloadIcon, headerStyle, isShowTopBar, middleHeader, headerLogo,headerLogoSticky, toplbarLayout1, toplbarLayout3, toplbarLayout, toplbarLayout4, logo, searchVisible, addressBox, btnQuote, btnQuoteClass, logoIcon, mailAddress, mapAddress, contactNumber }) => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    const handleScroll = () => {
        if (window.scrollY > 70) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="full-width-header">
            <div id="rs-header" className={`rs-header ${headerStyle ? headerStyle : ''} ${otherClass ? otherClass : ''}`}>
                {!isShowTopBar &&
                    <TopBar
                        topbarClass={topbarClass ? topbarClass : 'toolbar-style3'}
                        toplbarLayout={toplbarLayout}
                        mailAddress={mailAddress}
                        mapAddress={mapAddress}
                        contactNumber={contactNumber}
                        toplbarLayout1={toplbarLayout1}
                        toplbarLayout3={toplbarLayout3}
                        toplbarLayout4={toplbarLayout4}
                    />
                }
                {/* middle header */}
                {
                    middleHeader &&

                    <div className="middle-header hidden-md">
                        <div className="container">
                            <div className="row-table">
                                <div className="col-cell header-logo">
                                    <div className="logo-part">
                                        <Link to="/"><img src={headerLogo} alt="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-cell">
                                    <div className="rs-contact-info">
                                        <div className="contact-part">
                                            <div className="info-icon">
                                                <i className="ri-phone-line"></i>
                                            </div>
                                            <div className="contact-info">
                                                <span className="info-title">Call Us:</span>
                                                <div className="info-des">
                                                    <Link to="tel:+123-456-8899">123-456-8899</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-part">
                                            <div className="info-icon">
                                                <i className="ri-mail-add-line"></i>
                                            </div>
                                            <div className="contact-info">
                                                <span className="info-title">Email Us:</span>
                                                <div className="info-des">
                                                    <Link to="mailto:info@Redoxtheme.com">info@Redoxtheme.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-part margin-no">
                                            <div className="info-icon">
                                                <i className="ri-map-2-line"></i>
                                            </div>
                                            <div className="contact-info">
                                                <span className="info-title">Location:</span>
                                                <div className="info-des">
                                                    Ta-134a, New York
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className={`menu-area menu-sticky ${isSticky ? 'sticky' : ''}`}>
                    <div className={`container ${containerClass ? containerClass : ''} `}>
                        <div className="row-table">
                            <div className="col-cell header-logo">
                                <div className="logo-area">
                                    <Link to="/index">
                                        <img className="normal-logo" src={headerLogo} alt="logo" />
                                        <img className="sticky-logo" src={headerLogoSticky} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="rs-menu-area">
                                    <div className="main-menu">
                                        <nav className="rs-menu hidden-md">
                                            <ul className="nav-menu">
                                                <MenuItem />
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="expand-btn-inner">
                                    <ul>
                                        {
                                            searchVisible &&
                                            <li className={`search-parent ${isSearchVisible ? 'open_add_class' : ''}`}>
                                                <Link
                                                    className="hidden-xs rs-search"
                                                    to="#"
                                                    onClick={toggleSearch}
                                                >
                                                    <i className="ri-search-line"></i>
                                                </Link>
                                                {isSearchVisible && (
                                                    <div className="sticky_form">
                                                        <form
                                                            role="search"
                                                            className="bs-search search-form"
                                                            method="get"
                                                        >
                                                            <div className="search-wrap">
                                                                <label className="screen-reader-text active">
                                                                    Search for:
                                                                </label>
                                                                <input
                                                                    type="search"
                                                                    placeholder="Searching..."
                                                                    name="s"
                                                                    className="search-input"
                                                                />
                                                                <button type="submit" value="Search">
                                                                    <i className="flaticon-search"></i>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                )}
                                            </li>
                                        }
                                        {
                                            btnQuote &&

                                            <li className={`${btnQuoteClass ? btnQuoteClass : 'btn-quote'} `}>

                                                <Link to="#">
                                                    {
                                                        downloadIcon &&
                                                        <i className="ri-download-line"></i>
                                                    }
                                                    Get a Quote
                                                </Link>
                                            </li>
                                        }
                                        {
                                            addressBox &&
                                            <li className="address-box">
                                                <div className="address-item">
                                                    <div className="address-icon">
                                                        {
                                                            logoIcon ?
                                                                <i className={logoIcon}></i> : <img src={logo} alt="" />
                                                        }
                                                    </div>
                                                    <div className="address-text">
                                                        <span className="label">Free Consultancy</span>
                                                        <Link to="tel:++0098007804">+00 9800 7804</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        }
                                        <li className="nav-link">
                                            <Link
                                                id="nav-expander"
                                                className="nav-expander bar"
                                                to="#"
                                            >
                                                <div className="bar">
                                                    <span className="dot1"></span>
                                                    <span className="dot2"></span>
                                                    <span className="dot3"></span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* <nav className="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                    <div className="close-btn">
                        <a id="nav-close2" className="nav-close">
                            <div className="line">
                                <span className="line1"></span>
                                <span className="line2"></span>
                            </div>
                        </a>
                    </div>
                    <ul className="nav-menu">
                        <MenuItem />
                    </ul>
                </nav> */}
            </div>
        </div>
    );
};

export default Header;
