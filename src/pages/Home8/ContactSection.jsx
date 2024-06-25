import React, { useState } from 'react';
import arrowImage from '../../assets/images/contact/arrow-2.png';
import ContactForm2 from '../../components/Contact/ContactForm2';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        phone: '',
        website: '',
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
        <div className="rs-contact contact-style1">
            <div className="row no-gutters">
                <div className="col-lg-6 contact-img"></div>
                <div className="col-lg-6">
                    <div className="contact-wrap">
                        <SectionTitle
                            otherClass={'mb-40'}
                            otherTitleClass={'pb-20 white-color'}
                            title={'Get in touch'}
                            detailClass={'desc desc2'}
                            details={'Vestibulum lectus mauris ultrices eros in. Cursus sit amet dictum sit'}
                        />
                        <div id="form-messages">{formMessages}</div>
                        <ContactForm2 handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
                        <div className="arrow-icons">
                            <img src={arrowImage} alt="Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
