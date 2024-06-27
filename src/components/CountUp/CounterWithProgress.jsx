import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from '../ProgressBar/ProgressBar';

const CounterWithProgress = ({ counters, colClass, otherClass, bgBarColor, bgBarProgressColor, barPercentageText }) => {

    return (
        <div className="row">
            {counters.slice(0, 2).map(counter => (
                <div className={`${colClass ? colClass : 'col-lg-6'} ${otherClass ? otherClass : ''} `} key={counter.id}>
                    <div className="rs-counter-list">
                        <div className="count-text">
                            <div className="count-number">
                                <CountUp className='rs-count' end={counter.percentage} duration={2} />
                                <span className="prefix">%</span>
                            </div>
                            {/* <span className="title">{counter.title}</span> */}
                        </div>
                    </div>
                    <ProgressBar
                        duration={2000}
                        targetProgress={counter.targetProgress}
                        title={counter.title}
                        bgBarColor={bgBarColor}
                        bgBarProgressColor={bgBarProgressColor}
                        barPercentageText={barPercentageText}
                    />
                </div>
            ))}
        </div>
    );
};

export default CounterWithProgress;
