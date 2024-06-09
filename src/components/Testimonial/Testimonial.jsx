import React, { useRef, useCallback } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Testimonial = ({ testimonials, previewPhone, previewPhoneExt, previewSM, previewMd, preview, showPagination }) => {
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
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
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
                                <div className="testi-item">
                                    <div className="image-wrap">
                                        <img src={testimonial.imgSrc} alt="Images" />
                                    </div>
                                    <div className="testi-content">
                                        <div className="ratting">
                                            <img src={testimonial.ratingImg} alt="Images" />
                                        </div>
                                        <span className="quote-img-icon">
                                            <img src={testimonial.quoteIcon} alt="Images" />
                                        </span>
                                        <p className="desc">{testimonial.description}</p>
                                        <div className="testi-information">
                                            <div className="testi-name">{testimonial.name}</div>
                                            <span className="testi-title">{testimonial.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button ref={nextRef} onClick={handleNext} type="button" className="slick-next slick-arrow" aria-label="Next" role="button">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
