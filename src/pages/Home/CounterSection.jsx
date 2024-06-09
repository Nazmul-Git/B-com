import React from 'react';
import Counter from '../../components/Counter/Counter';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const CounterSection = () => {
    const counterData = [
        {
            title: 'Expert Member',
            count: 100,
            description: 'Bring to the table win-win survival',
            bgClass: 'count-bg1'
        },
        {
            title: 'Business Solution',
            count: 1850,
            description: 'Keeping your eye on the ball',
            bgClass: 'count-bg2'
        },
        {
            title: 'Years Experience',
            count: 25,
            description: 'Dynamically procrastinate B2C',
            bgClass: 'count-bg3'
        },
        {
            title: 'Satisfied Clients',
            count: 950,
            description: 'Completely synergize resource',
            bgClass: 'count-bg4'
        }
    ];

    return (
        <div className="rs-counter counter-style3 pt-30 pb-180 md-pt-0 md-pb-80">
            <div className="container custom10">
                <SectionTitle
                    title={'We help your site grow'}
                    titleClass={'title'}
                    otherClass={'mb-60 md-mb-35'}
                />
                <Counter counterData={counterData} />
            </div>
        </div>
    );
};

export default CounterSection;