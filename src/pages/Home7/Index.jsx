import React from 'react';
import HomeSevenMain from './HomeSevenMain';
import Header from '../../layout/Header';
import hederLogoPink from '../../assets/images/logo-pink.png';
import bubblePink from '../../assets/images/bubble-pink.png';

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
        </>
    );
};

export default Home7;