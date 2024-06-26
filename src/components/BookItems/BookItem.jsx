import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ imgSrc, category, title, price, link }) => (
    <div className="col-xl-3 col-md-6 xl-mb-30">
        <div className="book-item">
            <div className="read-wrap">
                <div className="read-img">
                    <Link to={link}><img src={imgSrc} alt="Book" /></Link>
                </div>
                <div className="book-content">
                    <span className="sub-text">{category}</span>
                    <h6 className="title"><Link to={link}>{title}</Link></h6>
                    <p className="price">{price}</p>
                </div>
            </div>
        </div>
    </div>
);

export default BookItem;
