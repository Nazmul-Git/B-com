import React from 'react';
import Blog from '../../components/Blog/Blog';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const BlogSection = ({ blog1, blog2, blog3 }) => {
    const blogPosts = [
        {
            date: 'March 10,2023',
            category: 'Bcom',
            title: 'An Avenue To Communicate Unique Selling Point Meeting',
            image: blog1,
            preCategory: 'Business',
            link: '/blog-single'
        },
        {
            date: 'March 10,2023',
            category: 'Bcom',
            title: 'Do It Right Is The Ultimate Winning Strategy',
            image: blog2,
            preCategory: 'Consulting',
            link: '/blog-single'
        },
        {
            date: 'March 10,2023',
            category: 'Bcom',
            title: 'Avenue Money And Make You Very Successful Creative',
            image: blog3,
            preCategory: 'Digital Marketing',
            link: '/blog-single'
        }
    ];
    return (
        <div className="rs-blog blog-style2 pt-125 pb-130 md-pt-75 md-pb-80">
            <div className="container custom10">
                <SectionTitle
                    title={"What's the latest?"}
                    otherClass={'text-center mb-50 md-mb-35'} />
                <Blog
                    blogPosts={blogPosts}
                />
            </div>
        </div>
    );
};

export default BlogSection;