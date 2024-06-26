import React from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../../components/BookItems/BookItem';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import book1 from '../../assets/images/book/bk1.png';
import book2 from '../../assets/images/book/bk2.png';
import book3 from '../../assets/images/book/bk3.png';
import book4 from '../../assets/images/book/bk4.png';

const BookStoreSection = () => {
    const books = [
        {
            imgSrc: book1,
            category: "Business",
            title: "Business Ideation",
            price: "$24.00",
            link: "/shop-single"
        },
        {
            imgSrc: book2,
            category: "Business",
            title: "Marketing Element",
            price: "$24.00",
            link: "/shop-single"
        },
        {
            imgSrc: book3,
            category: "Business",
            title: "How To Use CRM Sys",
            price: "$24.00",
            link: "/shop-single"
        },
        {
            imgSrc: book4,
            category: "Business",
            title: "Creative Idea in Flow",
            price: "$24.00",
            link: "/shop-single"
        }
    ];

    return (
        <div className="rs-book-store ebook-style1 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <SectionTitle
                    otherClass={'text-center mb-50'}
                    subText={'Book Store'}
                    subtextTitleClass={'sub-text sub-text2 sub-text5'}
                    title={"Read my book"}
                />
                <div className="row">
                    {books.map((book, index) => (
                        <BookItem
                            key={index}
                            imgSrc={book.imgSrc}
                            category={book.category}
                            title={book.title}
                            price={book.price}
                            link={book.link}
                        />
                    ))}
                </div>
                <div className="col-lg-12">
                    <div className="btn-part pt-60 md-pt-40">
                        <div className="blog-button blog-btn4 text-center">
                            <Link to="/shop">
                                <span className="btn-txt">View all post</span>
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookStoreSection;
