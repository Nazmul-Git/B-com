import React from 'react';
import HomeNineMain from './HomeNineMain';
import Header from '../../layout/Header';
import logoGreen from '../../assets/images/logo-green2.png';
import Footer4 from '../../layout/Footer4';

const Home9 = () => {
    return (
        <>
            <Header
                headerLogo={logoGreen}
                headerLogoSticky={logoGreen}
                headerStyle={'header-style1 header-modify6'}
                btnQuote={true}
                isShowTopBar={true}

            />
            <HomeNineMain />
            <Footer4
                footerStyleClass={'footer-style3'}
                footerTitleArea={true}
                footerTitle={'About Us'}
                btnClass={'blue-more'}
            />
        </>
    );
};

export default Home9;