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
                topbarClass={'toolbar-style3'}
                headerStyle={'header-style3'}
                headerLogo={headerLogo} 
                bubbleChat1={bubbleChat1}
            />
            <HomeMain />
            <Footer
                footerLogoWhite={footerLogoWhite}
            />
        </>
    );
};

export default Home;