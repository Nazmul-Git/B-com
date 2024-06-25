import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const NewsletterSection = () => {
    return (
        <div className="rs-newsletter newsletter-style1">
            <div className="container custom10">
                <div className="newsletter-wrapper">
                    <div className="row y-middle">
                        <div className="col-lg-7 md-mb-30">
                            <SectionTitle
                                otherTitleClass={'white-color'}
                                title={'Subscribe to our Newsletter & get latest updates.'}
                            />
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
