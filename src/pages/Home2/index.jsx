import React from 'react';
import HomeTwoMain from './HomeTwoMain';
import Header from '../../layout/Header';
import headerLogoWhite2 from '../../assets/images/logo-white2.png';

const HomeTwo = () => {
    return (
        <>
            <Header
                topbarClass={'toolbar-style3 toolbar-modify3'}
                headerStyle={'header-style3 header-modify1'}
                headerLogo={headerLogoWhite2}
                toplbarLayout={true}
            />
            <HomeTwoMain />
        </>
    );
};

export default HomeTwo;