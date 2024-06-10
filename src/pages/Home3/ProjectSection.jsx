import React, { useCallback, useRef } from 'react';
import ProjectCard1 from '../../components/Projects/ProjectCard1';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ProjectSection = ({ project1, project2, project3, project4, project5, project6, previewPhone, previewPhoneExt, previewSM, previewMd, preview, showPagination }) => {
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
            image: project4,
            category: 'Branding Design',
            title: 'Inventory Report',
            link: '/portfolio-single',
        },
        {
            id: 5,
            image: project5,
            category: 'Marketing Service',
            title: 'Risk Management',
            link: '/portfolio-single',
        },
        {
            id: 6,
            image: project6,
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
        <div className="rs-project project-style9 relatives gray-bg27 pt-130 pb-130 md-pt-80 md-pb-80">
            <div className="shape-divider project-shape-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className="container custom10">
                <SectionTitle
                    otherClass={'mb-55'}
                    titleClass={'title title11 blue-subnormal'}
                    title={'Successfully Completed Projects For Our Customers.'}
                />
            </div>
            <div className="slider project-slide-4 slick-initialized slick-slider">
                <button ref={prevRef} onClick={handlePrev} type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" role="button">Previous</button>
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
                            spaceBetween: 0,
                        },
                        992: {
                            slidesPerView: previewMd || 3,
                            spaceBetween: 0,
                        },
                        1200: {
                            slidesPerView: preview || 4,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {
                        projectsData.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectCard1
                                    image={project.image}
                                    category={project.category}
                                    title={project.title}
                                    link={project.link}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <button ref={nextRef} onClick={handleNext} type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button">Next</button>
            </div>
            <div className="shape-divider project-shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className="btn-part text-center mt-60 md-mt-40">
                <Link className="readon consultant get-green3 blue-quote1" to="/portfolio-single">View All Projects</Link>
            </div>
        </div>
    );
};

export default ProjectSection;
