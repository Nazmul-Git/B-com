import React from 'react';

const FeatureContent = () => {
    const featureList = [
        'Commitment to Quality',
        'Competitive Pricing',
        '100% Satisfaction Guarantee',
        'Business savvy',
        'Experienced Peoples',
        'Intellect and Experience'
    ];

    return (
        <div className="feature-content">
            <ul className="row check-lists check-list10">
                {featureList.map((feature, index) => (
                    <li key={index} className="col-lg-6 md-mb-10">
                        <div className="list-item">
                            <span className="icon-list-icon">
                                <i aria-hidden="true" className="ri-checkbox-circle-fill"></i>
                            </span>
                            <span className="list-text">{feature}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeatureContent;
