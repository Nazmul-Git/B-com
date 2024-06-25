import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import PartnerItem from '../../components/Partner/PartnerItem';
import ptnr1 from '../../assets/images/partner/style1/black-logo/ptnr-1.png';
import ptnr2 from '../../assets/images/partner/style1/black-logo/ptnr-2.png';
import ptnr3 from '../../assets/images/partner/style1/black-logo/ptnr-3.png';
import ptnr4 from '../../assets/images/partner/style1/black-logo/ptnr-4.png';
import ptnr5 from '../../assets/images/partner/style1/black-logo/ptnr-5.png';
import ptnr6 from '../../assets/images/partner/style1/black-logo/ptnr-6.png';
import ptnr7 from '../../assets/images/partner/style1/black-logo/ptnr-7.png';
import ptnr8 from '../../assets/images/partner/style1/black-logo/ptnr-8.png';
import ptnr9 from '../../assets/images/partner/style1/black-logo/ptnr-9.png';
import ptnr10 from '../../assets/images/partner/style1/black-logo/ptnr-10.png';
import ptnr11 from '../../assets/images/partner/style1/black-logo/ptnr-11.png';
import ptnr12 from '../../assets/images/partner/style1/black-logo/ptnr-12.png';

const partnersData = [
    { imgSrc: ptnr1, link: 'https://rstheme.com' },
    { imgSrc: ptnr2, link: 'https://rstheme.com' },
    { imgSrc: ptnr3, link: 'https://rstheme.com' },
    { imgSrc: ptnr4, link: 'https://rstheme.com' },
    { imgSrc: ptnr2, link: 'https://rstheme.com' },
    { imgSrc: ptnr5, link: 'https://rstheme.com' },
    { imgSrc: ptnr6, link: 'https://rstheme.com' },
    { imgSrc: ptnr7, link: 'https://rstheme.com' },
    { imgSrc: ptnr8, link: 'https://rstheme.com' },
    { imgSrc: ptnr9, link: 'https://rstheme.com' },
    { imgSrc: ptnr10, link: 'https://rstheme.com' },
    { imgSrc: ptnr11, link: 'https://rstheme.com' },
    { imgSrc: ptnr12, link: 'https://rstheme.com' },
];

const PartnersSection = ({ previewPhone, previewPhoneExt, previewSM, previewMd, preview }) => {
    return (
        <div id="rs-partner" className="rs-partner partner-style3 pt-30 pb-30">
            <div className="container custom13">
                <Swiper
                    className="slider partner-slide-2"
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
