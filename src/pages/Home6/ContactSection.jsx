import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/Contact/ContactForm';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        phone: '',
        message: ''
    });
    const [formMessages, setFormMessages] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
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
        <div className="rs-contact contact-style2 pt-130 pb-130 bg35 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-7">
                        <div className="touch-wrap">
                            <SectionTitle
                                otherClass={'sec-modify1 mb-40'}
                                subText={true}
                                subtextTitle={'Get in touch'}
                                title={'Get free marketing consultation today'}
                                titleClass={'pb-25 text-white'}
                                detailClass={'desc desc2'}
                                details={'Vestibulum lectus mauris ultrices eros in. Cursus sit amet dictum sit amet. Adipiscing tristique risus nec feugiat'}
                            />
                            <ul className="contact-button">
                                <li>
                                    <Link className="readon contact-icon" to="#">
                                        <span className="btn-txt">Contact Us</span>
                                        <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="readon consultant phone-number orange-light" to="/contact-us-1">
                                        <span className="btn-icon">
                                            <i className="fa fa-phone"></i>
                                        </span>
                                        <span className="btn-text">(00) 123 456 789</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-wrap">
                            <SectionTitle
                                otherClass={'mb-30'}
                                titleClass={'title title2'}
                                otherTitleClass={'white-color'}
                                title={'Get in touch'}
                            />
                            <div id="form-messages">{formMessages}</div>
                            <ContactForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
