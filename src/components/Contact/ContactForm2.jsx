import React from 'react';

const ContactForm2 = ({ handleSubmit,handleChange,formData }) => {
    return (
        <form id="contact-form" method="post" action="mailer.php" onSubmit={handleSubmit}>
            <fieldset>
                <div className="row">
                    <div className="col-sm-6 mb-23">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="col-sm-6 mb-23">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="col-sm-6 mb-23">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="col-sm-6 mb-23">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="text"
                            id="website"
                            name="website"
                            value={formData.website}
                            placeholder="Your Website Link"
                            required
                        />
                    </div>
                    <div className="col-sm-12 mb-23">
                        <textarea
                            className="form-control"
                            onChange={handleChange}
                            id="message"
                            name="message"
                            value={formData.message}
                            placeholder="Write Your Message Here"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="btn-part">
                    <div className="form-group mb-0">
                        <input
                            className="readon submit submit-yellow1"
                            type="submit"
                            value="Submit Now"
                        />
                    </div>
                </div>
            </fieldset>
        </form>
    );
};

export default ContactForm2;