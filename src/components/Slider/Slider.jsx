import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Slider = ({ sliderData, showPagination, previewPhone, previewPhoneExt, previewSM, previewMd, preview, custom, slider4, slider1 }) => {
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
            {sliderData.map((slider, index) => (
                <SwiperSlide key={index}>
                    <div className={`slider-item ${slider.sliderClass ? slider.sliderClass : ''}`}>
                        <div className={`container ${custom ? custom : ''}`}>
                            {
                                slider1 &&
                                <div className="slider-inner">
                                    <div className="slide-bg-layer"></div>
                                    <div className="slide-des">
                                        <div className="content-wrap">
                                            <h1 className="title wow fadeInDown">
                                                <span className="watermark">{slider.watermark}</span>
                                                {slider.title}
                                            </h1>
                                            <p className="desc wow fadeInRight">{slider.details}</p>
                                            <ul className="slider-btn wow fadeInUp">
                                                <li><Link className="readon contact" to="contact-us-1">Discover Now</Link></li>
                                                <li><Link className="readon contact con-small" to="contact-us-1">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            }

                            {
                                slider4 &&
                                
                                <div className="slider-content">
                                    <div className="content-wrap">
                                        <span className="sub-text wow fadeInDown">{slider.watermark}</span>
                                        <h2 className="small-title wow fadeInLeft">{slider.title}</h2>
                                        <h1 className="title wow fadeInLeft2">{slider.details}</h1>
                                        <div className="bnr-btn wow fadeInUp">
                                            <Link className="readon consultant get-con" to="/contact-us-1">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div className="dot-animate">
                                <div className="animation dot-1">
                                    <img className="veritcal2" src={slider.sliderImage1} alt="Images" />
                                </div>
                                <div className="animation dot-2">
                                    <img className="horizontal3" src={slider.sliderImage2} alt="Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
