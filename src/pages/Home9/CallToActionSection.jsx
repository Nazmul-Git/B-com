import React from 'react';
import CallToAction from '../../components/CallToAction/CallToAction';
import ctaImage from '../../assets/images/cta/style1/book-mockup.png';

const title = "Get Download your free\ncopy now!";
const description = "Adipiscing elit duis tristique sollicitudin. Mi bibendum neque egestas congue quisque. Sodales neque etiam sit.";
const placeholder = "Email Address";
const buttonText = "Get Started";

const CallToActionSection = () => {
    return (
        <>
            <CallToAction
                title={title}
                description={description}
                placeholder={placeholder}
                buttonText={buttonText}
                imageUrl={ctaImage}
            />
        </>
    );
};

export default CallToActionSection;