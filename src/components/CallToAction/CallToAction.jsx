import React from 'react';

const CallToAction = ({ title, description, placeholder, buttonText, imageUrl }) => (
    <div className="rs-cta cta-style3 gray-bg11 pt-140 pb-140 md-pt-80 md-pb-80">
        <div className="container">
            <div className="row y-middle">
                <div className="col-lg-6 md-mb-40">
                    <div className="sec-title">
                        <h2 className="title white-color pb-26">
                            {title}
                        </h2>
                        <p className="desc desc4 pb-50">
                            {description}
                        </p>
                        <div className="newsletter-form mb-30 md-mb-0">
                            <div className="form-inner">
                                <input id="news-email" type="email" name="email" placeholder={placeholder} required />
                                <input className="submit" type="submit" value={buttonText} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cta-img text-right md-left">
                        <img src={imageUrl} alt="Call to Action" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CallToAction;
