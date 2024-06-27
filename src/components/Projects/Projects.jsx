import React, { useRef, useCallback, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard1 from '../../components/Projects/ProjectCard1';

const Projects = ({ projects, previewPhone, previewPhoneExt, previewSM, previewMd, preview, showPagination, isTextContentFalse, imageInLink }) => {
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
        if (sliderRef.current) {
            const { swiper } = sliderRef.current;
            if (swiper) {
                swiper.navigation.update();
            }
        }
    }, []);

    return (
        <>
            <button ref={prevRef} onClick={handlePrev} type="button" className="slick-prev slick-arrow" aria-label="Previous" role="button">Previous</button>
            <Swiper
                slidesPerView={preview}
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
                        <ProjectCard1
                            image={project.image}
                            category={project.category}
                            title={project.title}
                            categoryLink={project.categoryLink}
                            titleLink={project.titleLink}
                            description={project.description}
                            isTextContentFalse={isTextContentFalse}
                            imageInLink={imageInLink}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button ref={nextRef} onClick={handleNext} type="button" className="slick-next slick-arrow" aria-label="Next" role="button">Next</button>
        </>
    );
};

export default Projects;