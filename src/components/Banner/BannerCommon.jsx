import React from 'react';
import { Link } from 'react-router-dom'; 

const BannerCommon = ({pageTitle, bgImage}) => {
    return (
        <div className="rs-breadcrumbs img1" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container">
                <div className="breadcrumbs-inner breadcrumbs-style1">
                    <h1 className="page-title">
                        {pageTitle}
                    </h1>
                    <p className="des">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
                    <ul className="breadcrumbs-area">
                        <li title="Go to Bcom">
                            <Link className="active" to="/">Home</Link>
                        </li>
                        <li>{pageTitle}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BannerCommon;
