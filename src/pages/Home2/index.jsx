import React from 'react';
import HomeTwoMain from './HomeTwoMain';
import Header from '../../layout/Header';
import headerLogoWhite2 from '../../assets/images/logo-white2.png';
import Footer from '../../layout/Footer'
import logoBlack from '../../assets/images/logo-black.png'
const HomeTwo = () => {
    return (
        <>
            <Header
                topbarClass={'toolbar-style3 toolbar-modify3'}
                mailAddress={true}
                mapAddress={true}
                contactNumber={true}
                headerStyle={'header-style3 header-modify1'}
                headerLogo={headerLogoWhite2}
                toplbarLayout={true}
                btnQuote={true}
            />
            <HomeTwoMain />

            <Footer
                footerLogo={logoBlack}
                footerClass={'footer-modify1'}
            />
        </>
    );
};

export default HomeTwo;