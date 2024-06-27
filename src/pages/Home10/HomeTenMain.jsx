import React from 'react';
import ServiceSection from './ServiceSection';
import BannerSection from './BannerSection';
import PartnerSection from './PartnerSection';
import AboutSection from './AboutSection';
import featureImage from '../../assets/images/about/about-h9.jpg';
import WhyChooseUsSection from './WhyChooseUsSection';
import TestimonialSection from './TestimonialSection';
import ProjectSection from './ProjectSection';
import PricingSection from './PricingSection';
import ProcessSection from './ProcessSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const HomeTenMain = () => {
    return (
        <>
            <BannerSection />
            <PartnerSection
                preview={5}
            />
            <AboutSection
                image={featureImage}
                title="Investment Opportunities For The Modern Investor."
                description="Bcom is an investment company that offers a wide range of investment products, including stocks, bonds, mutual funds, and ETFs."
            />
            <ServiceSection />
            <WhyChooseUsSection
                videoUrl={"https://www.youtube.com/watch?v=FMvA5fyZ338"}
                number={'(00) 123 456 789'}
                subtext={'Why Choose Us'}
                titleBreak1={'We Area The Only Leading'}
                titleBreak2={'Company In This Field'}
                details={'Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Fringilla urna porttitor rhoncus dolor.'}
            />
            <TestimonialSection
                preview={3}
                showPagination={true}
            />
            <ProjectSection />
            <PricingSection />
            <ProcessSection />
            <FAQSection
                activeItem={0}
                itemsArray={[0, 1, 2]}
            />
            <CTASection />
        </>
    );
};

export default HomeTenMain;