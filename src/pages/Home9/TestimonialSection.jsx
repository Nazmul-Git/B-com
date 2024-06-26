import React, { useRef, useCallback, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TestimonialCard6 from '../../components/Testimonial/TestimonialCard6';
import testiImg1 from '../../assets/images/testimonial/style3/testi-1.png';
import testiImg2 from '../../assets/images/testimonial/style3/testi-2.png';
import testiImg3 from '../../assets/images/testimonial/style3/testi-3.png';
import rattingImg from '../../assets/images/testimonial/style3/ratting.png';

const TestimonialSection = ({ previewPhone, previewPhoneExt, previewSM, previewMd, preview, showPagination }) => {
    const sliderRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const testimonials = [
        {
            img: testiImg1,
            desc: "It’s incredible. it’s really wonderful. bcom has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Brooklyn Simmons",
            title: "CEO, Bribbble LLC"
        },
        {
            img: testiImg2,
            desc: "It’s incredible. it’s really wonderful. bcom has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Micheal Holding",
            title: "Personal Counseling"
        },
        {
            img: testiImg3,
            desc: "It’s incredible. it’s really wonderful. bcom has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Brooklyn Simmons",
            title: "CEO, Bribbble LLC"
        },
    ];

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
            const { swiper } = sliderRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);
    return (
        <div className="rs-testimonial testimonial-style1 testimonial-modify1 gray-bg9 pt-135 pb-150 md-pt-75 md-pb-80">
            <div className="container">
                <SectionTitle
                    otherClass={'text-center mb-50'}
                    subText={true}
                    subtextTitle={'Testimonial'}
                    subtextTitleClass={'sub-text sub-text2 sub-text5'}
                    lineBreak={true}
                    titleBreak1={'What’s Clients says'}
                    titleBreak2={'about Us'}
                />
                <div className="slider testi-slide-1">
                    <button ref={prevRef} onClick={handlePrev} type="button" className="slick-prev slick-arrow" aria-label="Previous" role="button">Previous</button>
                    <Swiper
                        slidesPerView={preview}
                        spaceBetween={0}
                        loop={true}
                        centeredSlides={true}
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
                        {testimonials.map((testi, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard6 testi={testi} rattingImg={rattingImg} />
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