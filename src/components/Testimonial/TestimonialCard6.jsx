import React from 'react';

const TestimonialCard6 = ({testi,rattingImg}) => {
    return (
        <div className="testi-item">
            <div className="testi-images">
                <div className="image-wrap">
                    <img src={testi.img} alt="Images" />
                </div>
            </div>
            <div className="testi-wrap">
                <div className="testi-content">
                    <div className="rattings">
                        <img src={rattingImg} alt="Images" />
                    </div>
                    <p className="desc">{testi.desc}</p>
                    <div className="testi-information">
                        <div className="testi-name">{testi.name}</div>
                        <span className="testi-title">{testi.title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard6;