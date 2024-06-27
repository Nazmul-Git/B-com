import React from 'react';
import HomeThreeMain from './HomeThreeMain';
import Header from '../../layout/Header';
import headerLogo from '../../assets/images/logo.png';
import logoBlack from '../../assets/images/logo-black.png'
import FooterWithNewsLetter from '../../layout/FooterWithNewsLetter';

const Home3 = () => {
    return (
        <>
            <Header
                topbarClass={'toolbar-style3 toolbar-modify4'}
                containerClass={'custom13'}
                toplbarLayout3={true}
                mailAddress={true}
                mapAddress={true}
                headerStyle={'header-style3 header-modify2'}
                headerLogo={headerLogo}
                headerLogoSticky={headerLogo}
                searchVisible={true}
                addressBox={true}
                btnQuote={true}
                btnQuoteClass={'header-btn-wrapper'}
                logoIcon={'ri-phone-line'}
            />
            <HomeThreeMain />

            <FooterWithNewsLetter
                footerLogo={logoBlack}
                footerStyleClass={'footer-blue-style1'}
            />

        </>
    );
};

export default Home3;