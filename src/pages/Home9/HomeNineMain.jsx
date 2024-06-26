import React from 'react';
import ServiceSection from './ServiceSection';
import BannerSection from './BannerSection';
import FeatureSection from './FeatureSection';
import BookStoreSection from './BookStoreSection';
import TestimonialSection from './TestimonialSection';
import AuthorSection from './AuthorSection';
import authorImage from '../../assets/images/book/book-author.jpg';
import signatureImage from '../../assets/images/book/sign.png';
import BlogSection from './BlogSection';
import CallToActionSection from './CallToActionSection';
import ContactSection from './ContactSection';

const HomeNineMain = () => {
    return (
        <>
            <BannerSection />
            <ServiceSection />
            <FeatureSection
                buttonText="Free Download"
                buttonLink="/about-us"
            />
            <BookStoreSection />
            <TestimonialSection />
            <AuthorSection
                authorImage={authorImage}
                authorName="Mariya Nike"
                authorTitle="Author, Bcom"
                signatureImage={signatureImage}
                description1={'Hello, I am Mariya Nike, I have Neque egestas congue quisque egestas diam in arcu cursus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Quis commodo odio aenean sed the adipiscing. Adipiscing elit duis tristique sollicitudin. Mi bibendum neque egestas congue quisque. Sodales neque etiam sit.'}
                description2={'Quis varius quam quisque id diam vel quam elementum. Sapien et ligula ullamcorper malesuada proin. Consectetur lorem donec massa sapien faucibus et molestie ac.'}
            />
            <BlogSection
                showPagination={true}
            />
            <CallToActionSection />
            <ContactSection />
        </>
    );
};

export default HomeNineMain;