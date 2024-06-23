import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // For now, just display a success message
        setFormMessages('Your message has been sent successfully!');
    };

    return (
        <div className="contact-wrap">
            <div className="sec-title mb-30">
                <h5 className="title title2 white-color">
                    Get in touch
                </h5>
            </div>
            <div id="form-messages">{formMessages}</div>
            <form id="contact-form" method="post" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="row">
                        <div className="col-sm-12 mb-20">
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
                        </div>
                        <div className="col-sm-12 mb-20">
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
                        </div>
                        <div className="col-sm-12 mb-20">
                            <textarea
                                className="from-control"
                                id="message"
                                name="message"
                                placeholder="Write Your Message Here"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="btn-part">
                        <div className="form-group mb-0">
                            <input
                                className="readon submit submit-orange2"
                                type="submit"
                                value="Submit Now"
                            />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default ContactForm;
