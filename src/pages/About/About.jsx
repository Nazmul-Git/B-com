import React from 'react';
import AboutMain from './AboutMain';
import Header from '../../layout/Header';
import bubbleChat1 from '../../assets/images/bubble-chat-1.png';
import headerLogo from '../../assets/images/logo.png'
import logoBlack from '../../assets/images/logo-black.png';
import FooterWithNewsLetter from '../../layout/FooterWithNewsLetter';

const About = () => {
    return (
        <>
            <Header
                headerStyle={'header-style3'}
                headerLogo={headerLogo} 
                logo={bubbleChat1}
                searchVisible={true}
                addressBox={true}
                toplbarLayout1={true}
                headerLogoSticky={headerLogo}
                containerClass={'custom13'}
            />
            <AboutMain />
            <FooterWithNewsLetter
                footerLogo={logoBlack}
            />
        </>
    );
};

export default About;