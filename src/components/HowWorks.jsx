import React from 'react';

const HowWorks = ({ howItWorksData,howNew,pettarn,dot, title, details,pettarn2 }) => {
    return (
        <div className="row y-middle">
            <div className="col-lg-7 pr-110 md-pr-15 md-mb-50">
                <div className="images-wrap">
                    <img src={howNew} alt="Images" />
                    <div className="pettarn-one">
                        <img src={pettarn} alt="Images" />
                    </div>
                    <div className="dot-part">
                        <img className="horizontal3" src={dot} alt="Images" />
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="sec-title mb-20">
                    <h2 className="title pb">{title}</h2>
                    <p className="desc desc8">
                        {details}
                    </p>
                </div>
                {howItWorksData.map(item => (
                    <div className="addon-services-item mb-15" key={item.id}>
                        <div className="services-inner">
                            <div className="numbering">{item.id} </div>
                            <div className="content-part">
                                <h5 className="title">{item.title}</h5>
                                <div className="desc-text">{item.description}</div>
                            </div>
                            {item.image && (
                                <div className="ser-animate">
                                    <img src={item.image} alt="Images" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="dot-animation">
                <img className="veritcal3" src={pettarn2} alt="Images" />
            </div>
        </div>
    );
};

export default HowWorks;