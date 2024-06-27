import React, { useRef, useCallback, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PartnerItem from '../../components/Partner/PartnerItem';

// Import images
import testiImg1 from '../../assets/images/testimonial/style3/testi-1.png';
import testiImg2 from '../../assets/images/testimonial/style3/testi-2.png';
import testiImg3 from '../../assets/images/testimonial/style3/testi-3.png';
import rattingImg from '../../assets/images/testimonial/style3/ratting.png';
import TestimonialCard6 from '../../components/Testimonial/TestimonialCard6';

// Import partner images
import partnerImg1 from '../../assets/images/partner/style5/ptnr-1.png';
import partnerImg2 from '../../assets/images/partner/style5/ptnr-2.png';
import partnerImg3 from '../../assets/images/partner/style5/ptnr-3.png';
import partnerImg4 from '../../assets/images/partner/style5/ptnr-4.png';
import partnerImg5 from '../../assets/images/partner/style5/ptnr-5.png';
import partnerImg6 from '../../assets/images/partner/style5/ptnr-6.png';
import partnerImg7 from '../../assets/images/partner/style5/ptnr-7.png';
import partnerImg8 from '../../assets/images/partner/style5/ptnr-8.png';

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

    const partners = [
        { id: 1, src: partnerImg1, href: "https://rstheme.com" },
        { id: 2, src: partnerImg2, href: "https://rstheme.com" },
        { id: 3, src: partnerImg3, href: "https://rstheme.com" },
        { id: 4, src: partnerImg4, href: "https://rstheme.com" },
        { id: 5, src: partnerImg5, href: "https://rstheme.com" },
        { id: 6, src: partnerImg6, href: "https://rstheme.com" },
        { id: 7, src: partnerImg7, href: "https://rstheme.com" },
        { id: 8, src: partnerImg8, href: "https://rstheme.com" },
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
        <div className="rs-testimonial testimonial-style1 bg33 pt-135 pb-110 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50 md-mb-35">
                    <span className="sub-text">Testimonial</span>
                    <h2 className="title white-color">
                        What’s Clients says<br />
                        about Us
                    </h2>
                </div>
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

            <div className="rs-partner partner-style4 pt-80 md-pt-40">
                <div className="container">
                    <div className="slider partner-slide-1">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={5}
                            loop={true}
                            modules={[Autoplay, Navigation, Pagination]}
                            autoplay={{ delay: 3000 }}
                            breakpoints={{
                                0: {
                                    slidesPerView: previewPhone || 1,
                                    spaceBetween: 0,
                                },
                                576: {
                                    slidesPerView: previewPhoneExt || 2,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: previewSM || 2,
                                    spaceBetween: 0,
                                },
                                992: {
                                    slidesPerView: previewMd || 3,
                                    spaceBetween: 0,
                                },
                                1200: {
                                    slidesPerView: preview || 5,
                                    spaceBetween: 0,
                                },
                            }}
                        >
                            {partners.map((partner) => (
                                <SwiperSlide key={partner.id}>
                                    <PartnerItem src={partner.src} href={partner.href} singleImage={true} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
