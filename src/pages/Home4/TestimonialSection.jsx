import React, { useRef, useCallback, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testi1 from '../../assets/images/testimonial/style2/testi-1.png';
import testi2 from '../../assets/images/testimonial/style2/testi-2.png';
import testi3 from '../../assets/images/testimonial/style2/testi-3.png';
import questionMark from '../../assets/images/testimonial/style1/quotation-mark.png';
import TestimonialCard2 from '../../components/Testimonial/TestimonialCard2';

const TestimonialSection = ({ previewPhone, previewPhoneExt, previewSM, previewMd, preview, showPagination }) => {

    const sliderRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const testimonialsData = [
        {
            image: testi1,
            name: "Alex Burner",
            title: "Web Developer",
            description: "It's incredible. It's really wonderful. Adipiscing Bcom has completely surpassed our expectations. Urna porttitor rhoncus dolor purus non enim praesent facilisis lectus.",
        },
        {
            image: testi2,
            name: "Cameron Williamson",
            title: "Personal Counseling",
            description: "It's incredible. It's really wonderful. Adipiscing Bcom has completely surpassed our expectations. Urna porttitor rhoncus dolor purus non enim praesent facilisis lectus.",
        },
        {
            image: testi3,
            name: "Arlene McCoy",
            title: "Manager",
            description: "It's incredible. It's really wonderful. Adipiscing Bcom has completely surpassed our expectations. Urna porttitor rhoncus dolor purus non enim praesent facilisis lectus.",
        },
        {
            image: testi1,
            name: "Alex Burner",
            title: "Web Developer",
            description: "It's incredible. It's really wonderful. Adipiscing Bcom has completely surpassed our expectations. Urna porttitor rhoncus dolor purus non enim praesent facilisis lectus.",
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
        if (sliderRef.current) {
            const { swiper } = sliderRef.current;
            if (swiper) {
                swiper.navigation.update();
            }
        }
    }, []);

    return (
        <div className="rs-testimonial testimonial-style4 bg12 pt-170 pb-210 md-pt-110 md-pb-40">
            <div className="testi-bg-wrap"></div>
            <div className="container">
                <div className="sec-title text-center mb-50">
                    <h2 className="title title5">
                        What’s Clients says<br/>
                        about Us
                    </h2>
                </div>
                <div className="slider testi-slide-2">
                    <button ref={prevRef} onClick={handlePrev} type="button" className="slick-prev slick-arrow" aria-label="Previous" role="button">Previous</button>
                    <Swiper
                        slidesPerView={3}
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
                        className="slider testi-slide-4"
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
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard2
                                    image={testimonial.image}
                                    name={testimonial.name}
                                    title={testimonial.title}
                                    description={testimonial.description}
                                    logo={questionMark}
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
