import React from 'react';
import Portfolio2Main from './Portfolio2Main';
import bubbleChat1 from '../../../../assets/images/bubble-chat-1.png';
import headerLogo from '../../../../assets/images/logo.png'
import logoBlack from '../../../../assets/images/logo-black.png';
import FooterWithNewsLetter from '../../../../layout/FooterWithNewsLetter';
import Header from '../../../../layout/Header';
const Portfolio2 = () => {
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
            <Portfolio2Main />
            <FooterWithNewsLetter
                footerLogo={logoBlack}
            />
        </>
    );
};

export default Portfolio2;