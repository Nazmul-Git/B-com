import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ProjectSection = ({ projects, title, previewPhone, previewPhoneExt, previewSM, previewMd, preview, showPagination }) => {
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
        <div className="rs-project project-style1 project-modify3">
            <div className="project-overlay bg19">
                <div className="container">
                    <SectionTitle
                        title={'Our completed projects'}
                        mainClass={'sec-title'}
                        otherClass={'mb-50'}
                        titleClass={'title white-color'} />
                </div>
                <div className='slider project-slide-1 slick-initialized slick-slider'>
                    <button ref={prevRef} onClick={handlePrev} type="button" className="slick-prev slick-arrow" aria-label="Previous" role="button">Previous</button>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
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
                                slidesPerView: previewMd || 2,
                                spaceBetween: 0,
                            },
                            1200: {
                                slidesPerView: preview || 3,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {projects.map(project => (
                            <SwiperSlide key={project.id}>
                                <div className="project-item">
                                    <div className="project-img">
                                        <img src={project.image} alt="Images" />
                                    </div>
                                    <div className="project-content">
                                        <span className="category">
                                            <Link to="/portfolio-single">{project.category}</Link>
                                        </span>
                                        <h5 className="title">
                                            <Link to="/portfolio-single">{project.title}</Link>
                                        </h5>
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

export default ProjectSection;
