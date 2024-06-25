import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, contentClass, listClass1, listClass2, iconClass, btnClass, arrowRight, blogUrl, topButton, blogDesc }) => {
    return (
        <div className="blog-item">
            <div className="blog-inner-wrap">
                <div className="image-wrap">
                    <Link to={`${blogUrl ? blogUrl : '/portfolio-single'}`}>
                        <img src={blog.imgSrc} alt="Images" />
                    </Link>
                    {
                        topButton &&
                        <div className="pre-cat-list">
                            <Link to={`${blogUrl ? blogUrl : '/portfolio-single'}`}>Consulting</Link>
                        </div>
                    }
                </div>
                <div className="blog-content">
                    <ul className={`${contentClass ? contentClass : 'pre-blog-meta'}`}>
                        <li className={listClass1 ? listClass1 : ''}><i className={`${iconClass ? iconClass : 'ri-bookmark-line'}`}></i>{blog.category}</li>
                        <li className={listClass2 ? listClass2 : ''}><i className="ri-user-line"></i><Link to={`${blogUrl ? blogUrl : '/portfolio-single'}`}>{blog.author}</Link></li>
                    </ul>
                    <h5 className="blog-title">
                        <Link to={`${blogUrl ? blogUrl : '/portfolio-single'}`}>{blog.title}</Link>
                    </h5>
                    {
                        blogDesc &&
                        <p className="blog-desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                    }
                    <div className={`blog-button ${btnClass ? btnClass : 'blog-btn7'}`}>
                        <Link to={`${blogUrl ? blogUrl : '/portfolio-single'}`}>
                            <span className="btn-txt">Read More</span>
                            {
                                arrowRight &&
                                <i className="ri-arrow-right-line"></i>
                            }
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
