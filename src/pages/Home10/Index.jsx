import React from 'react';
import HomeTenMain from './HomeTenMain';
import Header from '../../layout/Header';
import logoBlue from '../../assets/images/logo-blue2.png';
import Footer from '../../layout/Footer';
import logoWhite from '../../assets/images/logo-white.png';

const Home10 = () => {
    return (
        <>
            <Header
                headerStyle={'header-style1 header-modify7 header-transparent'}
                containerClass={'box-layout'}
                headerLogo={logoBlue}
                headerLogoSticky={logoBlue}
                btnQuote={true}
                btnQuoteClass={'btn-normal'}
                isShowTopBar={true}
            />
            <HomeTenMain />
            <Footer
                footerHomeMain={'footer-main-home'}
                footerClass={' '}
                footerStyleClass={'footer-modify3'}
                footerLogo={logoWhite}
            />
        </>
    );
};

export default Home10;