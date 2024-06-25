import React from 'react';
import { Link } from 'react-router-dom';

const SectionTitle = ({ title, details, mainClass, otherClass, titleClass, detailClass, borderStyle, otherTitleClass, borderStyleClass, btnPart, btnClass, linkClass, href, linkTitle, watermarkClass, titleClass2, title2, subText, subtextTitle, subtextTitleClass,detailClass2,details2 }) => {
    return (
        <div className={`${mainClass ? mainClass : 'sec-title'} ${otherClass ? otherClass : 'mb-20'} `}>
            {
                subText &&
                <span className={`${subtextTitleClass ? subtextTitleClass : "sub-text"}`}>{subtextTitle}</span>
            }
            <h2 className={`${titleClass ? titleClass : 'title'} ${otherTitleClass ? otherTitleClass : ''}`}>{watermarkClass ? <span className={watermarkClass}>{title}</span> : title}</h2>
            {
                details &&
                <p className={`${detailClass ? detailClass : 'desc desc8'}`}>{details && details}</p>
            }
            {
                details2 &&
                <p className={`${detailClass2 ? detailClass2 : 'desc desc8'}`}>{details2 && details2}</p>
            }
            {
                borderStyle &&
                <div className={`${borderStyleClass ? borderStyleClass : "heading-border-line left-style"}`}></div>
            }
            {
                btnPart &&
                <div className={`${btnClass ? btnClass : "btn-part"}`}>
                    <Link className={`${linkClass ? linkClass : "readon consultant get-yellow blue-light"}`} to={href}>
                        {linkTitle}
                    </Link>
                </div>
            }
            {
                title2 &&
                <h5 className={`${titleClass2 ? titleClass2 : 'title'}`}>
                    {title2}
                </h5>
            }
        </div>
    );
};

export default SectionTitle;