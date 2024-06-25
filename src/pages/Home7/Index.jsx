import React from 'react';
import HomeSevenMain from './HomeSevenMain';
import Header from '../../layout/Header';
import hederLogoPink from '../../assets/images/logo-pink.png';
import bubblePink from '../../assets/images/bubble-pink.png';
import Footer4 from '../../layout/Footer4';
import footerLogoPink from '../../assets/images/logo-pink.png';

const Home7 = () => {
    return (
        <>
            <Header
                headerStyle={'header-style3 header-modify4 header-transparent'}
                headerLogo={hederLogoPink}
                headerLogoSticky={hederLogoPink}
                containerClass={'box-layout'}
                isShowTopBar={true}
                addressBox={true}
                logo={bubblePink}
            />
            <HomeSevenMain />
            <Footer4
                footerLogo={footerLogoPink}
                footerModifyClass={'footer-modify2'}
                btnClass={'dis-pink'}
            />
        </>
    );
};

export default Home7;