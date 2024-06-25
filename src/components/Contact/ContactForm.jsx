import React from 'react';

const ContactForm = ({ handleSubmit, handleChange,formData }) => {
    
    return (
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
    );
};

export default ContactForm;
