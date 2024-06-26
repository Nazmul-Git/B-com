import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('./contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    topic: '',
                    phone: '',
                    message: ''
                });
                setFormMessages('Message sent successfully!');
            } else {
                alert('Failed to send message.');
                setFormMessages('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
            setFormMessages('An error occurred while sending the message.');
        }
    };

    return (
        <div className="rs-contact contact-style4 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container custom5">
                <div className="row no-gutters">
                    <div className="col-lg-4 contact-img"></div>
                    <div className="col-lg-4 md-mb-50">
                        <div className="contact-info">
                            <SectionTitle
                                otherClass={'mb-45'}
                                titleClass={'title title3'}
                                otherTitleClass={'pb-14'}
                                title={'Contact Info'}
                                details={'Business ipsum dolor sit amet consectetur adipiscing elit. Suspendisse suscipit sagittis leo elementum.'}
                            />
                            <div className="address-item mb-30">
                                <div className="address-icon">
                                    <i className="ri-map-2-line"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Talk with Support:</span>
                                    <p className="desc">
                                        818 SW 3RD Ave Suite 161,<br />
                                        Oregon, 9999 USA.
                                    </p>
                                </div>
                            </div>
                            <div className="address-item mb-30">
                                <div className="address-icon">
                                    <i className="ri-phone-line"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Office Location:</span>
                                    <p className="desc">
                                        (800) 800 – 8888<br />
                                        (800) 900– 9999
                                    </p>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="ri-timer-line"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Office Hours:</span>
                                    <p className="desc">
                                        Mon-Fri: 10:00 - 17:00<br />
                                        Sat-Sun: Weekend
                                    </p>
                                </div>
                            </div>
                            <div className="feature-btn mt-50">
                                <Link className="readon direction" to="#">Get Directions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-wrap">
                            <SectionTitle
                                otherClass={'mb-25'}
                                titleClass={'title title3'}
                                otherTitleClass={'white-color'}
                                title={'Get in touch'}
                            />
                            <div id="form-messages"></div>
                            <form id="contact-form" method="post" action="mailer.php" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="row">
                                        <div className="col-lg-12 mb-30">
                                            <span className="wpcf7-form-control-wrap">
                                                <i className="ri-user-3-line"></i>
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </span>
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <span className="wpcf7-form-control-wrap">
                                                <i className="ri-mail-line"></i>
                                                <input
                                                    className="from-control"
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </span>
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <span className="wpcf7-form-control-wrap">
                                                <i className="ri-phone-fill"></i>
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </span>
                                        </div>
                                        <div className="col-sm-12 mb-30">
                                            <span className="wpcf7-form-control-wrap">
                                                <i className="ri-edit-line"></i>
                                                <textarea
                                                    className="from-control"
                                                    id="message"
                                                    name="message"
                                                    placeholder="Write your message here..."
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-part">
                                        <div className="form-group mb-0">
                                            <input className="readon submit submit-blue2" type="submit" value="Submit Now" />
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
