import React from 'react';

const SectionTitle = ({title, details, mainClass, otherClass, titleClass,detailClass,borderStyle}) => {
    return (
        <div className={`${mainClass ? mainClass : 'sec-title'} ${otherClass ? otherClass : 'mb-20'} `}>
            <h2 className={`${titleClass ? titleClass : 'title pb'}`}>{title && title}</h2>
            {
                details &&
                <p className={`${detailClass ? detailClass : 'desc desc8'}`}>{details && details}</p>
            }
            {
                borderStyle &&
                <div className="heading-border-line left-style"></div>
            }
        </div>
    );
};

export default SectionTitle;