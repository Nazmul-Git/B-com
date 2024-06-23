import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BlogCardHorizontal from '../../components/Blog/BlogCardHorizontal';

const BlogSection = ({ blog1, blog2, blog3 }) => {
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
