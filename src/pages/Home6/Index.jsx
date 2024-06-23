import React from 'react';
import HomeSixMain from './HomeSixMain';
import Header from '../../layout/Header';
import headerLogoNormal from '../../assets/images/logo-orange.png';
import headerLogoSticky from '../../assets/images/logo-orange.png';
import FooterWithNewsLetter from '../../layout/FooterWithNewsLetter';
import orangeBlackLogo from '../../assets/images/orange-black.png';

const Home6 = () => {
    return (
        <>
            <Header
                headerStyle={'header-style1 header-modify3 header-transparent'}
                headerLogo={headerLogoNormal}
                headerLogoSticky={headerLogoSticky}
                btnQuote={true}
                btnQuoteClass={'btn-normal'}
                topbarClass={true}
            />
            <HomeSixMain />

            <FooterWithNewsLetter
                footerLogo={orangeBlackLogo}
                footerStyleClass ='footer-orange-style1'
            />
        </>
    );
};

export default Home6;