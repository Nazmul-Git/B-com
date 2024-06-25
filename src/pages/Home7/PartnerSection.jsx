import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import PartnerItem from '../../components/Partner/PartnerItem';
import ptnr1 from '../../assets/images/partner/style3/pink-logo/ptnr-1.png';
import ptnr2 from '../../assets/images/partner/style3/pink-logo/ptnr-2.png';
import ptnr3 from '../../assets/images/partner/style3/pink-logo/ptnr-3.png';
import ptnr4 from '../../assets/images/partner/style3/pink-logo/ptnr-4.png';
import ptnr5 from '../../assets/images/partner/style3/pink-logo/ptnr-5.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const partnersData = [
    { imgSrc: ptnr1, link: 'https://rstheme.com' },
    { imgSrc: ptnr2, link: 'https://rstheme.com' },
    { imgSrc: ptnr3, link: 'https://rstheme.com' },
    { imgSrc: ptnr4, link: 'https://rstheme.com' },
    { imgSrc: ptnr2, link: 'https://rstheme.com' },
    { imgSrc: ptnr5, link: 'https://rstheme.com' },
    { imgSrc: ptnr4, link: 'https://rstheme.com' },
];

const PartnersSection = ({ previewPhone, previewPhoneExt, previewSM, previewMd, preview }) => {
    return (
        <div id="rs-partner" className="rs-partner partner-style3 partner-modify2 pb-60 md-pb-10">
            <div className="container">
                <SectionTitle
                    otherClass={'text-center mb-50 md-mb-35'}
                    title2={'Bcom Is Partnered With 30k+ Fastest Growing Companies'}
                    titleClass2={'title title7'}
                />
                <Swiper
                    className="slider partner-slide-1"
                    slidesPerView={5}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
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
                            slidesPerView: preview || 5,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {partnersData.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <PartnerItem
                                src={partner.imgSrc}
                                href={partner.link}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PartnersSection;
