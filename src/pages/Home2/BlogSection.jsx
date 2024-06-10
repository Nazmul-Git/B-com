import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const BlogSection = ({blog1,blog2,blog3}) => {
    return (
        <div className="rs-blog blog-style1 blog-modify2 pt-140 pb-120 md-pt-80 md-pb-60">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <SectionTitle
                            title={'Our latest news for our business consulting'}
                            titleClass={'title title11'}
                            otherClass={'mb-30'}
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="btn-part text-right md-left">
                            <Link className="readon consultant get-yellow blue-light" to="/blog-single">
                                View All Post
                            </Link>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    );
};

export default BlogSection;
