import React from 'react';
import HomeThreeMain from './HomeThreeMain';
import Header from '../../layout/Header';
import headerLogo from '../../assets/images/logo.png';

const Home3 = () => {
    return (
        <>
            <Header
                topbarClass={'toolbar-style3 toolbar-modify4'}
                toplbarLayout={true}
                mailAddress={true}
                mapAddress={true}
                headerStyle={'header-style3 header-modify2'}
                headerLogo={headerLogo}
                searchVisible={true}
                addressBox={true}
                btnQuote={true}
                btnQuoteClass={'header-btn-wrapper'}
                logoIcon={'ri-phone-line'}
            />
            <HomeThreeMain />
        </>
    );
};

export default Home3;