import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Slider2 = ({ sliderData,showPagination,previewPhone,previewPhoneExt,previewSM,previewMd,preview, dots, circle }) => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={showPagination ? { clickable: true } : false}
            modules={[Pagination, Autoplay]}
            freeMode={true}
            loop={true}
            breakpoints={{
                0: {
                    slidesPerView: previewPhone || 1,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: previewPhoneExt || 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: previewSM || 1,
                    spaceBetween: 14,
                },
                992: {
                    slidesPerView: previewMd || 1,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: preview || 1,
                    spaceBetween: 20,
                },
            }}
        >
            {sliderData.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={`slider-item ${slide.sliderClass ? slide.sliderClass : ''}`}>
                        <div className="container">
                            <div className="slider-content">
                                <div className="content-wrap">
                                    <div className="shape-top wow fadeInDown">
                                        <img src={slide.image1} alt="Shape" />
                                    </div>
                                    <h2 className="title wow fadeInDown">{slide.title}</h2>
                                    <p className="desc wow fadeInLeft">{slide.description}</p>
                                    <div className="bnr-btn wow fadeInUp">
                                        <Link className="readon consultant get-con" to={slide.buttonLink}>{slide.buttonText}</Link>
                                    </div>
                                    <div className="shape-bottom wow fadeInUp">
                                        <img src={slide.image2} alt="Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="animate-wrap">
                                <div className="animation one">
                                    <img src={dots} alt="Dots" />
                                </div>
                                <div className="animation two">
                                    <img className="horizontal3" src={dots} alt="Dots" />
                                </div>
                                <div className="animation three">
                                    <img className="spiner" src={circle} alt="Circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider2;