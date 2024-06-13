import React, { useCallback, useRef } from 'react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import BlogCard from '../../components/Blog/BlogCard';
import blog1 from '../../assets/images/blog/style6/bl-1.jpg';
import blog2 from '../../assets/images/blog/style6/bl-2.jpg';
import blog3 from '../../assets/images/blog/style6/bl-3.jpg';
import blog4 from '../../assets/images/blog/style6/bl-4.jpg';
import blog5 from '../../assets/images/blog/style6/bl-5.jpg';

const BlogSection = ({ showPagination, previewPhone, previewPhoneExt, previewSM, previewMd, preview }) => {
    const sliderRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const blogs = [
        {
            id: 1,
            imgSrc: blog1,
            category: 'Business',
            author: 'Bcom',
            title: 'Avenue money and make you very successful'
        },
        {
            id: 2,
            imgSrc: blog2,
            category: 'Business',
            author: 'Bcom',
            title: 'Earn good money and make you very successful'
        },
        {
            id: 3,
            imgSrc: blog3,
            category: 'Business',
            author: 'Bcom',
            title: 'Do it right is the ultimate winning strategy'
        },
        {
            id: 4,
            imgSrc: blog4,
            category: 'Business',
            author: 'Bcom',
            title: 'An avenue to communicate unique selling meeting'
        },
        {
            id: 5,
            imgSrc: blog5,
            category: 'Business',
            author: 'Bcom',
            title: 'Boosts credibility and reliability of your brands'
        }
    ];

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className="rs-blog blog-main-home gray-bg pt-130 pb-180 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title mb-55">
                    <h2 className="title pb-20">
                        Our Latest Blog
                    </h2>
                </div>
                <div className="slider blog-slide-2">
                    <button ref={prevRef} onClick={handlePrev} type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" role="button">Previous</button>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        loop={true}
                        pagination={showPagination ? { clickable: true } : false}
                        modules={[Pagination, Autoplay, Navigation]}
                        onSwiper={(swiper) => {
                            // Assign navigation elements
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            // Initialize and update navigation
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        ref={sliderRef}
                        breakpoints={{
                            0: {
                                slidesPerView: previewPhone || 1,
                                spaceBetween: 0,
                            },
                            576: {
                                slidesPerView: previewPhoneExt || 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: previewSM || 2,
                                spaceBetween: 0,
                            },
                            992: {
                                slidesPerView: previewMd || 2,
                                spaceBetween: 0,
                            },
                            1200: {
                                slidesPerView: preview || 3,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {blogs.map(blog => (
                            <SwiperSlide key={blog.id}>
                                <BlogCard
                                    blog={blog}
                                    contentClass='blog-meta'
                                    listClass1='categories'
                                    listClass2='admin'
                                    iconClass='ri-calendar-line'
                                    btnClass='blog-btn1'
                                    arrowRight={true}
                                    blogUrl='/blog-details'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button ref={nextRef} onClick={handleNext} type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button">Next</button>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
