import React from 'react';
import TestimonialCard2 from '../../components/Testimonial/TestimonialCard2';
import { Swiper, SwiperSlide } from 'swiper/react';
import testi1 from '../../assets/images/testimonial/style2/testi-1.png';
import testi2 from '../../assets/images/testimonial/style2/testi-2.png';
import testi3 from '../../assets/images/testimonial/style2/testi-3.png';
import arrow9 from '../../assets/images/testimonial/style2/arrow-9.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const TestimonialSection = ({ showPagination, previewPhone, previewPhoneExt, previewSM, previewMd, preview }) => {
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
    return (
        <div className="rs-testimonial testimonial-style2 testimonial-modify8 pt-60 md-pt-20">
            <div className="container custom10">
                <div className="testi-overlay-bg bg30 pt-50 pb-130 md-pb-60">
                    <div className="row y-middle">
                        <div className="col-lg-5 pr-50 md-pr-15 md-mb-40">
                            <SectionTitle
                                titleClass={'title title11'}
                                otherTitleClass={'pb-24'}
                                title={'What’s Clients Says About Us'}
                                detailClass={'desc desc8 pb-35'}
                                details={'Quickly aggregate B2B users and worldwide in potential your data. Progressively plagiarize resource-leveling e-commerce business data services.'}
                                btnPart={true}
                                linkClass={'readon consultant get-green3 blue-quote1'}
                                href={'/portfolio-single'}
                                linkTitle={'View All'}
                            />
                        </div>
                        <div className="col-lg-7">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={preview}
                                loop={true}
                                autoplay={{ delay: 3000 }}
                                pagination={showPagination ? { clickable: true } : false}
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
                                        slidesPerView: preview || 2,
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
                                            logo={arrow9}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;