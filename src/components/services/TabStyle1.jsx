import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';

const ServiceTabStyle1 = ({ tabstyleClass, tabs, curveArrow, title, details,contentTitle, contentDetails }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className={`rs-tab-main ${tabstyleClass ? tabstyleClass : 'tab-style2'}`}>
            <div className="tab-main-wrap">
                <nav className="tab-menu-wrapper">
                    {/* section title */}
                    <SectionTitle title={title} details={details}/>
                    <div className="nav nav-tabs basic left" id="nav-tab">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`nav-link ${tab.id === activeTab ? 'active' : ''}`}
                                id={`nav-home-${tab.id}`}
                                type="button"
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <i className={tab.icon}></i>{tab.title}
                            </button>
                        ))}
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    {tabs.map(tab => (
                        <div
                            key={tab.id}
                            className={`tab-pane fade ${tab.id === activeTab ? 'active show' : ''}`}
                            id={`tab${tab.id}`}
                            role="tabpanel"
                            aria-labelledby={`nav-home-${tab.id}`}
                        >
                            <div className="content-teb-area full-sec">
                                <div className="content-tab-area">
                                    <div className="image">
                                        <img src={tab.img} alt="Images" />
                                    </div>
                                    <div className="content-left-area">
                                        <div className="title">{contentTitle}</div>
                                        <div className="desc-btn-wrapper">
                                            <p>{contentDetails}</p>
                                            <div className="services-button ser-btn3">
                                                <Link to={tab.href}>
                                                    <span className="btn-txt">Read More</span>
                                                    <i className="ri-arrow-right-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="tab-animate">
                <img src={curveArrow} alt="Images" />
            </div>
        </div>
    );
};

export default ServiceTabStyle1;
