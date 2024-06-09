import React from 'react';

const NewsletterSection = () => {
    return (
        <div className="rs-newsletter newsletter-style1">
            <div className="container custom10">
                <div className="newsletter-wrapper">
                    <div className="row y-middle">
                        <div className="col-lg-7 md-mb-30">
                            <div className="sec-title">
                                <h2 className="title white-color">
                                    Subscribe to our Newsletter & get latest updates.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="newsletter-form">
                                <input
                                    className="newsletter-input"
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Email Address"
                                    required
                                />
                                <input
                                    className="newsletter-button"
                                    type="submit"
                                    value="Subscribe Now"
                                />
                                <i className="ri-arrow-right-up-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;
