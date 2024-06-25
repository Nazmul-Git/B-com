import React, { useCallback, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from '../../assets/images/project/style3/pro-1.jpg';
import project2 from '../../assets/images/project/style3/pro-2.jpg';
import project3 from '../../assets/images/project/style3/pro-3.jpg';
import ProjectCard2 from '../../components/Projects/ProjectCard2';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ProjectSection = ({ showPagination, previewPhone, previewPhoneExt, previewSM, previewMd, preview }) => {
    const sliderRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const projectsData = [
        {
            id: 1,
            image: project1,
            category: 'Digital marketing',
            title: 'Market Analysis',
            link: '/portfolio-single',
        },
        {
            id: 2,
            image: project2,
            category: 'Financial advisory',
            title: 'Alex Brands',
            link: '/portfolio-single',
        },
        {
            id: 3,
            image: project3,
            category: 'Business Services',
            title: 'Business Planning',
            link: '/portfolio-single',
        },
        {
            id: 4,
            image: project1,
            category: 'Branding Design',
            title: 'Inventory Report',
            link: '/portfolio-single',
        },
        {
            id: 5,
            image: project2,
            category: 'Marketing Service',
            title: 'Risk Management',
            link: '/portfolio-single',
        },
        {
            id: 6,
            image: project3,
            category: 'Digital marketing',
            title: 'Risk Management',
            link: '/portfolio-single',
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
        <div className="rs-project project-style3 pt-70 pb-140 md-pt-14 md-pb-80">
            <div className="container">
                <SectionTitle
                    otherClass={'pro-sec'}
                    subText={true}
                    subtextTitle={'our projects'}
                    title={'Our Works'}
                />
                <div className="swiper project-slide2">
                    <Swiper
                        slidesPerView={4}
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
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: previewMd || 3,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: preview || 3,
                                spaceBetween: 30,
                            },
                        }}
                        className='swiper project-slide2'
                    >
                        {projectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard2
                                    key={index}
                                    image={project.image}
                                    category={project.category}
                                    title={project.title}
                                    link={project.link}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-scrollbar"></div>
                    <div className="swiper-navigation">
                        <div ref={nextRef} onClick={handleNext} className="swiper-button-next"></div>
                        <div ref={prevRef} onClick={handlePrev} className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;