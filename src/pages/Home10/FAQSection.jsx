import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import Acordion from '../../components/Acordion/Acordion'; // Adjust the import path as per your project structure

const FAQSection = ({ activeItem, itemsArray }) => {
    const faqs = [
        { question: "Can I get my order sooner?", answer: "Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum." },
        { question: "These cases are perfectly simple", answer: "Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum." },
        { question: "How can I get support?", answer: "Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum." },
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: '',
        message: '',
    });

    const formatIndex = (index) => {
        return index < 9 ? `0${index + 1}` : `${index + 1}`;
    };

    // Determine which faqs to render based on itemsArray
    const dataToRender = itemsArray.length > 0 ? itemsArray.map(index => faqs[index]) : faqs;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
        <div className="rs-faq faq-style1 faq-modify5 pt-130 pb-130 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-7">
                        <div className="content-wrap">
                            <div className="sec-title mb-40">
                                <span className="sub-text sub-text2">Faq</span>
                                <h2 className="title pb-25">
                                    We Create Something for Your Future
                                </h2>
                                <p className="desc">
                                    Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada elementum.
                                </p>
                            </div>
                            <div className="faq-content">
                                <Accordion defaultActiveKey={activeItem} className='accordion'>
                                    {
                                        dataToRender.map((faq, index) => (
                                            <Acordion
                                                key={index}
                                                faq={faq}
                                                index={index}
                                                formatIndex={formatIndex}
                                            />
                                        ))
                                    }
                                </Accordion>
                            </div>
                            <div className="faq-button faq-btn1 mt-45">
                                Need Help?
                                <Link to="/contact">
                                    Contact Us <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="rs-contact contact-style8">
                            <div className="contact-wrap">
                                <div className="sec-title mb-30">
                                    <h2 className="title white-color">
                                        Get in touch
                                    </h2>
                                </div>
                                <div id="form-messages"></div>
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <fieldset>
                                        <div className="row">
                                            <div className="col-sm-12 mb-20">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-12 mb-20">
                                                <input
                                                    className="from-control"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-12 mb-20">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-12 mb-20">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    name="query"
                                                    placeholder="Query"
                                                    value={formData.query}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-12 mb-35">
                                                <textarea
                                                    className="from-control"
                                                    name="message"
                                                    placeholder="Write Your Message Here"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="btn-part">
                                            <div className="form-group mb-0">
                                                <input className="readon submit submit-purple2" type="submit" value="Submit Now" />
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

export default FAQSection;
