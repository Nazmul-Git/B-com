import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import partnerImg1 from '../../assets/images/partner/style2/ptnr-1.png';
import partnerImg2 from '../../assets/images/partner/style2/ptnr-2.png';
import partnerImg3 from '../../assets/images/partner/style2/ptnr-3.png';
import partnerImg4 from '../../assets/images/partner/style2/ptnr-4.png';
import partnerImg5 from '../../assets/images/partner/style2/ptnr-5.png';
import partnerImg6 from '../../assets/images/partner/style2/ptnr-6.png';
import partnerImg7 from '../../assets/images/partner/style2/ptnr-7.png';
import partnerImg8 from '../../assets/images/partner/style2/ptnr-8.png';
import PartnerItem from '../../components/Partner/PartnerItem';

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

const PartnerSection = ({ previewPhone, previewPhoneExt, previewSM, previewMd, preview }) => {
    return (
        <div className="rs-partner partner-main-home partner-modify1 gray-bg4 pt-75 pb-70">
            <div className="container">
                <div className="sec-title text-center mb-50 md-mb-35">
                    <h6 className="title title7">
                        Bcom is partnered with 30k+ fastest growing companies
                    </h6>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 2000, 
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className='slider'
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
                    {partners.map(partner => (
                        <SwiperSlide key={partner.id}>
                            <PartnerItem src={partner.src} href={partner.href} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PartnerSection;
