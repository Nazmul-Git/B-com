import React, { useCallback, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Correct import path for Swiper modules
import TestimonialCard1 from '../../components/Testimonial/TestimonialCard1';

const TestimonialSection = ({ testi1, testi2, ratting, quoteIcon, previewPhone, previewPhoneExt, previewSM, previewMd, preview, showPagination }) => {
    const testimonials = [
        {
            id: 1,
            imgSrc: testi1,
            ratingImg: ratting,
            quoteIcon: quoteIcon,
            description: "It’s incredible. It’s really wonderful. Bcom has completely surpassed our expectations. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Alex Burner",
            title: "Web Developer"
        },
        {
            id: 2,
            imgSrc: testi2,
            ratingImg: ratting,
            quoteIcon: quoteIcon,
            description: "It’s incredible. It’s really wonderful. Bcom has completely surpassed our expectations. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Brooklyn Simmons",
            title: "CEO, Bribbble LLC"
        },
        {
            id: 3,
            imgSrc: testi1,
            ratingImg: ratting,
            quoteIcon: quoteIcon,
            description: "It’s incredible. It’s really wonderful. Bcom has completely surpassed our expectations. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Alex Burner",
            title: "Web Developer"
        },
        {
            id: 4,
            imgSrc: testi2,
            ratingImg: ratting,
            quoteIcon: quoteIcon,
            description: "It’s incredible. It’s really wonderful. Bcom has completely surpassed our expectations. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Brooklyn Simmons",
            title: "CEO, Bribbble LLC"
        }
    ];

    const sliderRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        if (sliderRef.current && sliderRef.current.swiper) {
            sliderRef.current.swiper.params.navigation.prevEl = prevRef.current;
            sliderRef.current.swiper.params.navigation.nextEl = nextRef.current;
            sliderRef.current.swiper.navigation.init();
            sliderRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <div className="rs-testimonial testimonial-style5 bg47 pt-130 pb-130 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title mb-20">
                    <h2 className="title">
                        What client say?
                    </h2>
                </div>
                <div className='slider testi-slide-1 slick-initialized slick-slider'>
                    <button ref={prevRef} onClick={handlePrev} type="button" className="slick-prev slick-arrow" aria-label="Previous" role="button">Previous</button>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="slider testi-slide-1"
                        loop={true}
                        pagination={showPagination ? { clickable: true } : false}
                        modules={[Pagination, Autoplay, Navigation]}
                        ref={sliderRef}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
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
                                slidesPerView: previewSM || 1,
                                spaceBetween: 0,
                            },
                            992: {
                                slidesPerView: previewMd || 1,
                                spaceBetween: 0,
                            },
                            1200: {
                                slidesPerView: preview || 1,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialCard1
                                    testimonial={testimonial}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button ref={nextRef} onClick={handleNext} type="button" className="slick-next slick-arrow" aria-label="Next" role="button">Next</button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
