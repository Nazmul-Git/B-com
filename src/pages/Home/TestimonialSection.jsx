import React from 'react';
import Testimonial from '../../components/Testimonial/Testimonial';

const TestimonialSection = ({ testi1, testi2, ratting, quoteIcon, mainClass, bgImageClass }) => {
    const testimonials = [
        {
            id: 1,
            imgSrc: testi1,
            ratingImg: ratting,
            quoteIcon: quoteIcon,
            description: "It’s incredible. it’s really wonderful. bcom has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Alex Burner",
            title: "Web Developer"
        },
        {
            id: 2,
            imgSrc: testi2,
            ratingImg: ratting,
            quoteIcon: quoteIcon,
            description: "It’s incredible. it’s really wonderful. bcom has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Brooklyn Simmons",
            title: "CEO, Bribbble LLC"
        },
        {
            id: 3,
            imgSrc: testi1,
            ratingImg: ratting,
            quoteIcon: quoteIcon,
            description: "It’s incredible. it’s really wonderful. bcom has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Alex Burner",
            title: "Web Developer"
        },
        {
            id: 4,
            imgSrc: testi2,
            ratingImg: ratting,
            quoteIcon: quoteIcon,
            description: "It’s incredible. it’s really wonderful. bcom has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus feugiat fermentum.",
            name: "Brooklyn Simmons",
            title: "CEO, Bribbble LLC"
        }
    ];
    return (
        <Testimonial
            testimonials={testimonials}
            // mainClass={mainClass}
            // bgImageClass={bgImageClass}
        />
    );
};

export default TestimonialSection;