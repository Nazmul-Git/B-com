import React from 'react';

const AuthorSection = ({ authorImage, authorName, authorTitle, signatureImage, description1, description2 }) => (
    <div id="rs-book-store" className="rs-book-store ebook-style1 ebook-modify1 pt-140 pb-140 md-pt-80 md-pb-80">
        <div className="container">
            <div className="row y-middle">
                <div className="col-lg-6 md-mb-50">
                    <div className="ebook-img">
                        <img src={authorImage} alt="Author" />
                    </div>
                </div>
                <div className="col-lg-6 pl-40 md-pl-15">
                    <div className="sec-title mb-45">
                        <span className="sub-text sub-text2 sub-text5">About the author</span>
                        <h2 className="title pb-27">
                            Bestselling Book Without Writing A Single Word
                        </h2>
                        <p className="desc pb-25">
                            {description1}
                        </p>
                        <p className="desc">
                            {description2}
                        </p>
                    </div>
                    <div className="sign-content">
                        <div className="sign-img">
                            <img src={signatureImage} alt="Signature" />
                        </div>
                        <div className="text-part">
                            <h6 className="title">{authorName}, {authorTitle}</h6>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    </div>
);

export default AuthorSection;
