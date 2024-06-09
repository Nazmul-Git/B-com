import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blogPosts}) => {
    
    return (
        <div className="row">
            {blogPosts.map((post, index) => (
                <div className="col-lg-4 md-mb-30" key={index}>
                    <div className="blog-item">
                        <div className="blog-inner-wrap">
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li>{post.date}</li>
                                    <li><Link to={post.link}>{post.category}</Link></li>
                                </ul>
                                <h5 className="blog-title">
                                    <Link to={post.link}>{post.title}</Link>
                                </h5>
                            </div>
                            <div className="image-wrap">
                                <Link to={post.link}>
                                    <img src={post.image} alt="Images" />
                                </Link>
                                <div className="pre-cat-list">
                                    <Link to={post.link}><i className="ri-bookmark-line"></i>{post.preCategory}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;