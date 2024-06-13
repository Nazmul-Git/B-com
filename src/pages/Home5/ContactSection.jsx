import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        insuranceType: 'Life Insurance',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., sending data to a server
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="rs-contact contact-style3 bg6 pt-130 pb-130 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title">
                            <h2 className="title pb-24 white-color">
                                Compare quotes and get life insurance in right way
                            </h2>
                            <p className="desc desc2 pb-25">
                                Start a fast, free auto insurance quote with Alico.
                                We help you find any insurance coverages that are right
                                for you, so you’re not paying for anything you don’t want!
                                Dolor morbi non arcu risus.
                            </p>
                            <p className="desc desc3">
                                Facing any problem to get a quote!
                            </p>
                            <ul className="con-btn-wrap mt-30">
                                <li>
                                    <Link className="readon consultant get-green get-green2" to="#">
                                        <span className="btn-text">Get a Quote</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="readon consultant phone-number green-white" to="contact-us-1">
                                        <span className="btn-icon">
                                            <i className="ri-phone-fill"></i>
                                        </span>
                                        <span className="btn-text">(00) 123 456 789</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-80 md-pl-15">
                        <div className="contact-wrap">
                            <div className="sec-title mb-30">
                                <h5 className="title title2">
                                    Insurance Quote
                                </h5>
                            </div>
                            <div id="form-messages"></div>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="row">
                                        <div className="col-lg-12 mb-30">
                                            <span className="wpcf7-form-control-wrap">
                                                <i className="ri-user-add-line"></i>
                                                <select
                                                    className="select-arrow select-hide"
                                                    name="insuranceType"
                                                    value={formData.insuranceType}
                                                    onChange={handleChange}
                                                >
                                                    <option value="Life Insurance">Life Insurance</option>
                                                    <option value="Health Insurance">Health Insurance</option>
                                                    <option value="Car Insurance">Car Insurance</option>
                                                    <option value="Home Insurance">Home Insurance</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <span className="wpcf7-form-control-wrap">
                                                <i className="ri-mail-send-fill"></i>
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </span>
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <span className="wpcf7-form-control-wrap">
                                                <i className="ri-phone-line"></i>
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </span>
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <div className="rs-tooltip">
                                                <div className="esrstooltip">$1</div>
                                                <div className="handle-part"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-part">
                                        <div className="form-group mb-0">
                                            <input className="readon submit submit-green" type="submit" value="Get A Quote Now" />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
