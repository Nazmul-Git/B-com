import React from 'react';
import HomeFiveMain from './HomeFiveMain';
import Header from '../../layout/Header';
import normalGreenLogo from '../../assets/images/logo-green.png';
import stickyGreenLogo from '../../assets/images/logo-green.png';
import footerLogoGreen from '../../assets/images/logo-green.png';
import FooterWithNewsLetter2 from '../../layout/FooterWithNewsLetter2';

const Home5 = () => {
    return (
        <>
            <Header
                isShowTopBar={true}
                headerStyle={'header-style1'}
                otherClass={'header-transparent'}
                headerLogo={normalGreenLogo}
                headerLogoSticky={stickyGreenLogo}
                btnQuote={true}
                downloadIcon={true}
            />
            <HomeFiveMain />

            <FooterWithNewsLetter2
                footerLogo={footerLogoGreen}
            />
        </>
    );
};

export default Home5;