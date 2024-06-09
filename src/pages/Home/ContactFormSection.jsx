import React, { useState, useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ContactFormSection = ({ contactArrow, supportClients }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const countUpRef = useRef(null);

    useEffect(() => {
        const countUp = new CountUp(countUpRef.current, 150);
        if (!countUp.error) {
            countUp.start();
        } else {
            console.error(countUp.error);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send formData to server
        console.log(formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className="rs-contact contact-style7 bg24 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container custom10">
                <div className="row">
                    <div className="col-lg-7 md-mb-50">
                        <SectionTitle title={"We're here to support"} titleClass={'title' } otherClass={'mb-55 md-mb-35'}/>
                        <div className="row y-middle">
                            <div className="col-lg-8">
                                <div className="icon-box-wrapper">
                                    <SectionTitle
                                        title={'Opening Times'}
                                        titleClass={'title title2 white-color'}
                                        otherClass={'mb-30'} />
                                    <div className="icon-box-item mb-10">
                                        <div className="box-icon">
                                            <i className="ri-user-3-line"></i>
                                        </div>
                                        <div className="box-text">
                                            <span className="label">Mon - Fri: 09am - 07pm</span>
                                        </div>
                                    </div>
                                    <div className="icon-box-item">
                                        <div className="box-icon">
                                            <i className="ri-clock-line"></i>
                                        </div>
                                        <div className="box-text">
                                            <span className="label">Sat - Sun: Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="arrow-icon">
                                    <img src={contactArrow} alt="Images" />
                                </div>
                            </div>
                        </div>
                        <div className="services-part pt-50">
                            <div className="row">
                                <div className="col-lg-5 md-mb-30">
                                    <div className="support-client">
                                        <img src={supportClients} alt="Images" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="rs-counter-list">
                                                <div className="count-text">
                                                    <div className="count-number">
                                                        <span ref={countUpRef} className="rs-count">0</span>
                                                        <span className="prefix">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h5 className="content-txt">
                                                Client satisfaction
                                                our services
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 pl-48 md-pl-15">
                        <div className="contact-wrapper">
                            <div className="content-part">
                                <SectionTitle
                                    title={'Contact With Us'}
                                    titleClass={'title title8'}
                                    otherClass={'white-color'} />
                            </div>
                            <div className="contact-wrap">
                                <div id="form-messages"></div>
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <fieldset>
                                        <div className="row">
                                            <div className="col-lg-12 mb-20">
                                                <span className="wpcf7-form-control-wrap">
                                                    <i className="ri-user-3-line"></i>
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </span>
                                            </div>
                                            <div className="col-lg-12 mb-20">
                                                <span className="wpcf7-form-control-wrap">
                                                    <i className="ri-mail-line"></i>
                                                    <input
                                                        className="from-control"
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </span>
                                            </div>
                                            <div className="col-lg-12 mb-20">
                                                <span className="wpcf7-form-control-wrap">
                                                    <i className="ri-phone-fill"></i>
                                                    <input
                                                        className="from-control"
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </span>
                                            </div>
                                            <div className="col-sm-12 mb-20">
                                                <span className="wpcf7-form-control-wrap">
                                                    <i className="ri-edit-line"></i>
                                                    <textarea
                                                        className="from-control"
                                                        id="message"
                                                        name="message"
                                                        placeholder="Write your message here..."
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                    ></textarea>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="btn-part">
                                            <div className="form-group mb-0">
                                                <input
                                                    className="readon submit submit-blue4"
                                                    type="submit"
                                                    value="Send Message"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;
