import React from 'react';
import { Link } from 'react-router-dom';

const BlogCardHorizontal = ({ blog1,blog2,blog3 }) => {
    return (
        <div className="row">
            <div className="col-lg-6 md-mb-30">
                <div className="blog-item">
                    <div className="image-wrap">
                        <Link to="/blog-single"><img src={blog1} alt="" /></Link>
                    </div>
                    <div className="/blog-content">
                        <ul className="blog-meta">
                            <li className="categories">March 13,2023</li>
                            <li className="admin"><Link to="/blog-single">Bcom</Link></li>
                        </ul>
                        <h5 className="blog-title"><Link to="/blog-single">Differentiates your business from competition the ultimate</Link></h5>
                        <div className="blog-button blog-btn6">
                            <Link to="/blog-single">
                                <span className="btn-txt">Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="blog-horizontal">
                    <div className="blog-meta mb-30">
                        <div className="blog-item-wrap">
                            <div className="image-wrap">
                                <Link to="/blog-single"><img src={blog2} alt="" /></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li className="categories">March 13,2023</li>
                                    <li className="admin"><Link to="/blog-single">Bcom</Link></li>
                                </ul>
                                <h5 className="blog-title"><Link to="/blog-single">An avenue to communicate unique selling point meeting</Link></h5>
                                <p className="blog-desc">
                                    Vestibulum lectus mauris ultrices eros in. Cursus sit amet dictum sit amet.
                                </p>
                                <div className="blog-button blog-btn6">
                                    <Link to="/blog-single">
                                        <span className="btn-txt">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-meta">
                        <div className="blog-item-wrap">
                            <div className="image-wrap">
                                <Link to="/blog-single"><img src={blog3} alt="" /></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li className="categories">March 13,2023</li>
                                    <li className="admin"><Link to="/blog-single">Bcom</Link></li>
                                </ul>
                                <h5 className="blog-title"><Link to="/blog-single">Do it right is the ultimate winning strategy for consultant</Link></h5>
                                <p className="blog-desc">
                                    Vestibulum lectus mauris ultrices eros in. Cursus sit amet dictum sit amet.
                                </p>
                                <div className="blog-button blog-btn6">
                                    <Link to="/blog-single">
                                        <span className="btn-txt">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardHorizontal;