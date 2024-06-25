import React from 'react';
import HomeEightMain from './HomeEightMain';
import Header from '../../layout/Header';
import headerlogoBlue from '../../assets/images/logo-blue.png';
import FooterWithNewsLetter from '../../layout/FooterWithNewsLetter';
import logoBlueWhite from '../../assets/images/blue-white.png';

const Home8 = () => {
    return (
        <>
            <Header
                headerStyle={'header-style1 header-modify5 header-transparent'}
                headerLogo={headerlogoBlue}
                headerLogoSticky={headerlogoBlue}
                containerClass={'box-layout'}
                isShowTopBar={true}
                btnQuote={true}
                btnQuoteClass={'btn-normal'}
            />
            <HomeEightMain />
            <FooterWithNewsLetter
                footerLogo={logoBlueWhite}
                footerStyleClass={'footer-black2'}
            />
        </>
    );
};

export default Home8;