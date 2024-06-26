import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
    const contacts = [
        {
            icon: 'ri-phone-fill',
            label: 'Call Us',
            description: '(+088)589-8745',
        },
        {
            icon: 'ri-mail-open-fill',
            label: 'Mail Us',
            description: 'support@rstheme.com',
        },
        {
            icon: 'ri-share-forward-fill',
            label: 'Follow Us',
            socialLinks: [
                { url: '#', icon: 'ri-facebook-fill' },
                { url: '#', icon: 'ri-twitter-fill' },
                { url: '#', icon: 'ri-youtube-fill' },
                { url: '#', icon: 'ri-linkedin-fill' },
                { url: '#', icon: 'ri-instagram-fill' },
            ],
        },
    ];
    return (
        <div className="rs-contact contact-style5 black-bg2 pt-40 pb-40">
            <div className="container">
                <div className="row custom10">
                    {contacts.map((detail, index) => (
                        <div className={`col-lg-4 col-md-6 ${index === 1 ? 'sm-mb-30' : 'md-mb-30'}`} key={index}>
                            <div className="address-box">
                                <div className="address-icon">
                                    <i className={detail.icon}></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">{detail.label}</span>
                                    {detail.description ? (
                                        <span className="des">{detail.description}</span>
                                    ) : (
                                        <div className="social-icon">
                                            {detail.socialLinks.map((link, i) => (
                                                <Link to={link.url} key={i}>
                                                    <i className={link.icon}></i>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactSection;
