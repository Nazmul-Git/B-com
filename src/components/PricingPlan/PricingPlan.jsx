import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const PricingPlan = ({plans,title,titleClass,otherClass,backgroundImg,spaceingClass}) => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    return (
        <div className={`pricing-container rs-pricing-container pricing-style1 pricing-modify2 ${backgroundImg ? backgroundImg : ''} ${spaceingClass ? spaceingClass : 'pt-310 pb-140 md-pt-110 md-pb-80'}`}>
            <div className="container">
                <SectionTitle
                    title={title}
                    titleClass={titleClass}
                    otherClass={otherClass} 
                />
            </div>
            <div className="pricing-switcher">
                <p className="fieldset mnt-ac">
                    <input
                        type="radio"
                        name="duration-1"
                        value="monthly"
                        id="monthly-1"
                        checked={billingCycle === 'monthly'}
                        onChange={() => setBillingCycle('monthly')}
                    />
                    <label htmlFor="monthly-1" id="rsmnt" className="rs-mnt">Monthly</label>
                    <input
                        type="radio"
                        name="duration-1"
                        value="yearly"
                        id="yearly-1"
                        checked={billingCycle === 'yearly'}
                        onChange={() => setBillingCycle('yearly')}
                    />
                    <label htmlFor="yearly-1" id="rsyrs" className="rs-yrs">Yearly</label>
                    <span className="switch"></span>
                </p>
            </div>
            <div className="container">
                <ul className="pricing-list bounce-invert">
                    {plans.map(plan => (
                        <li className="exclusive md-mb-30" key={plan.id}>
                            <ul className="pricing-wrapper">
                                <li className={billingCycle === 'monthly' ? 'is-visible' : 'is-hidden'}>
                                    {plan.hasBadge && billingCycle === 'monthly' && <div className="pricebadge">{plan.badgeText}</div>}
                                    <header className="pricing-header">
                                        <h3 className="title">{plan.type}</h3>
                                        <div className="price-inner">
                                            <div className="price">${plan.monthlyPrice.toFixed(2)}</div>
                                            <span>/ Month</span>
                                        </div>
                                    </header>
                                    <div className="pricing-body">
                                        <div className="features">
                                            <ul>
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className={typeof feature === 'string' || feature.unlocked ? '' : 'close-icon'}>
                                                        {typeof feature === 'string' ? feature : feature.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <footer className="pricing-footer">
                                        <Link to="/contact-us-1">Get Started</Link>
                                    </footer>
                                </li>
                                <li className={billingCycle === 'yearly' ? 'is-visible' : 'is-hidden'}>
                                    <header className="pricing-header">
                                        <h3 className="title">{plan.type}</h3>
                                        <div className="price-inner">
                                            <div className="price">${plan.yearlyPrice.toFixed(2)}</div>
                                            <span>/ Year</span>
                                        </div>
                                    </header>
                                    <div className="pricing-body">
                                        <div className="features">
                                            <ul>
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className={typeof feature === 'string' || feature.unlocked ? '' : 'close-icon'}>
                                                        {typeof feature === 'string' ? feature : feature.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <footer className="pricing-footer">
                                        <Link to="/contact-us-1">Get Started</Link>
                                    </footer>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingPlan;