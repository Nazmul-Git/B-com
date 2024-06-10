import React from 'react';
import HomeMain from './HomeMain';
import Header from '../../layout/Header';
import headerLogo from '../../assets/images/logo.png'
import Footer from '../../layout/Footer';
import footerLogoWhite from '../../assets/images/logo-white.png';
import bubbleChat1 from '../../assets/images/bubble-chat-1.png';

const Home = () => {
    return (
        <>
            <Header
                headerStyle={'header-style3'}
                headerLogo={headerLogo} 
                logo={bubbleChat1}
                searchVisible={true}
                addressBox={true}
            />
            <HomeMain />
            <Footer
                footerLogo={footerLogoWhite}
            />
        </>
    );
};

export default Home;