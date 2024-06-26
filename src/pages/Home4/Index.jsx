import React from 'react';
import HomeFourMain from './HomeFourMain';
import Header from '../../layout/Header';
import logo from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logo-white2.png';
import Footer4 from '../../layout/Footer4';
import footerLogo from '../../assets/images/logo.png';

const Home4 = () => {
    return (
        <>
            <Header
                headerStyle={'header-main-style1'}
                topbarClass={'toolbar-style2'}
                toplbarLayout4={true}
                middleHeader={true}
                headerLogo={logo}
                headerLogoSticky={logoWhite}
                btnQuote={true}
                downloadIcon={true}
                containerClass={'box-layout'}
            />
            <HomeFourMain />

            <Footer4 
                footerLogo={footerLogo}
                containerClass={'custom8'}
                rowClass={'y-middle'}
                footerLogoArea={true}
                btnIcon={true}
            />
        </>
    );
};

export default Home4;