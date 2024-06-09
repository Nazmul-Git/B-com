import React from 'react';
import ServiceSection from './ServiceSection';
import SliderSection from './SliderSection';
import AboutSection from './AboutSection';
import image1 from '../../assets/images/about/style2/img1.png';
import image2 from '../../assets/images/about/style2/img2.png';
import WhyChooseSection from './WhyChooseSection';
import whyNew from '../../assets/images/choose/style1/why-new.jpg'
import pettarn from '../../assets/images/choose/style1/pettarn.png';
import dot from '../../assets/images/choose/style1/dot.png';
import ProjectSection from './ProjectSection';
import port1 from '../../assets/images/project/style5/port-1.jpg';
import port2 from '../../assets/images/project/style5/port-2.jpg';
import port3 from '../../assets/images/project/style5/port-3.jpg';
import port4 from '../../assets/images/project/style5/port-4.jpg';
import PricingSection from './PricingSection';
import CTASection from './CTASection';
import arrow from '../../assets/images/cta/style1/arrow.png';
import testi1 from '../../assets/images/testimonial/style3/testi-1.png';
import ratting from '../../assets/images/testimonial/style3/ratting.png';
import quoteIcon from '../../assets/images/testimonial/style3/quote-icon.png';
import testi2 from '../../assets/images/testimonial/style3/testi-2.png';
import TestimonialSection from './TestimonialSection';
import CTA2Section from './CTA2Section';
import CounterSection from './CounterSection';
import ContactFormSection from './ContactFormSection';
import contactArrow from '../../assets/images/contact/contact-arrow.png';
import supportClients from '../../assets/images/contact/support-clients.png';
import BlogSection from './BlogSection';
import blog1 from '../../assets/images/blog/style5/bl-1.jpg';
import blog2 from '../../assets/images/blog/style5/bl-2.jpg';
import blog3 from '../../assets/images/blog/style5/bl-3.jpg';
import NewsletterSection from './NewsletterSection ';

const HomeMain = () => {
    const projects = [
        {
            id: 1,
            category: 'Digital marketing',
            title: 'Market Analysis',
            image: port1
        },
        {
            id: 2,
            category: 'App Design',
            title: 'Market Analysis',
            image: port2
        },
        {
            id: 3,
            category: 'Development Service',
            title: 'Investment Plan',
            image: port3
        },
        {
            id: 4,
            category: 'Marketing Service',
            title: 'Risk Management',
            image: port4
        },
        {
            id: 5,
            category: 'Development Service',
            title: 'Investment Plan',
            image: port1
        },
        {
            id: 6,
            category: 'Branding Design',
            title: 'Inventory Management',
            image: port2
        }
    ];

    return (
        <>
            {/* Hero Slider Section */}
            <SliderSection />

            {/* About Section */}
            <AboutSection
                image1={image1}
                image2={image2}
            />

            {/* Service Section */}
            <ServiceSection />

            {/* Why choose us section */}
            <WhyChooseSection
                whyNew={whyNew}
                pettarn={pettarn}
                dot={dot}
            />

            {/* Projects section */}
            <ProjectSection
                projects={projects}
                title={'Our completed projects'}
            />

            {/* Pricing section */}
            <PricingSection />

            {/* CTA */}
            <CTASection
                arrow={arrow}
                title={' Developing Leader and high performance team'}
                titleClass={'title white-color'}
                otherClass={'md-text-center'}
            />

            {/* Testimonial Section */}
            <TestimonialSection
                testi1={testi1}
                testi2={testi2}
                ratting={ratting}
                quoteIcon={quoteIcon}
            // mainClass={'testimonial-style5'}
            // bgImageClass={'bg47'}
            />

            {/* CTA 2 */}
            <CTA2Section />

            {/* Counter Section */}
            <CounterSection />

            {/* Contact form section */}
            <ContactFormSection
                contactArrow={contactArrow}
                supportClients={supportClients}
            />

            {/* Blog Section */}
            <BlogSection
                blog1={blog1}
                blog2={blog2}
                blog3={blog3}
            />

            {/* Newsletter Section */}
            <NewsletterSection />
        </>
    );
};

export default HomeMain;