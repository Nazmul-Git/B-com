import React from 'react';
import HomeTwoMain from './HomeTwoMain';
import Header from '../../layout/Header';
import headerLogoWhite2 from '../../assets/images/logo-white2.png';
import logoBlack from '../../assets/images/logo-black.png'
import FooterWithNewsLetter from '../../layout/FooterWithNewsLetter';
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
                headerLogoSticky={headerLogoWhite2}
                toplbarLayout3={true}
                btnQuote={true}
            />
            <HomeTwoMain />

            <FooterWithNewsLetter
                footerLogo={logoBlack}
            />
        </>
    );
};

export default HomeTwo;