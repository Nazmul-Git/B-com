import React from 'react';
import BlogCardHorizontal from '../../components/Blog/BlogCardHorizontal';
import blog1 from '../../assets/images/blog/style2/bl1.jpg';
import blog2 from '../../assets/images/blog/style2/bl2.jpg';
import blog3 from '../../assets/images/blog/style2/bl3.jpg';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    return (
        <div className="rs-blog blog-style1 bg34 pt-125 pb-130 md-pb-80 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <div className="sec-title mb-50">
                            <span className="sub-text">blog & news</span>
                            <h2 className="title">
                                Our Least Blog
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog-button mt--30 md-mb-50 blog-btn3 text-right md-left">
                            <Link to="/blog-details">
                                <span className="btn-txt">View all post</span>
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <BlogCardHorizontal
                    blog1={blog1}
                    blog2={blog2}
                    blog3={blog3}
                />
            </div>
        </div>
    );
};

export default BlogSection;