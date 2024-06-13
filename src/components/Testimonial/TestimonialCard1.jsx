import React from 'react';

const TestimonialCard1 = ({testimonial}) => {
    return (
        <div className="testi-item">
            <div className="image-wrap">
                <img src={testimonial.imgSrc} alt="Images" />
            </div>
            <div className="testi-content">
                <div className="ratting">
                    <img src={testimonial.ratingImg} alt="Images" />
                </div>
                <span className="quote-img-icon">
                    <img src={testimonial.quoteIcon} alt="Images" />
                </span>
                <p className="desc">{testimonial.description}</p>
                <div className="testi-information">
                    <div className="testi-name">{testimonial.name}</div>
                    <span className="testi-title">{testimonial.title}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard1;