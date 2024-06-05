import React from 'react';
import HomeMain from './HomeMain';
import Header from '../../layout/Header';
import headerLogo from '../../assets/images/logo.png'

const Home = () => {
    return (
        <>
            <Header topbarClass={'toolbar-style3'} headerStyle={'header-style3'} headerLogo={headerLogo}/>
            <HomeMain />
        </>
    );
};

export default Home;