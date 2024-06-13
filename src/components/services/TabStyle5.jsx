import React from 'react';
import TabFiveCard from './TabFiveCard';

const TabStyle5 = ({ services }) => {
    return (
        <div className="row">
            {
                services.map((service, index) => (
                    <TabFiveCard key={index}
                        mainImg={service.mainImg}
                        title={service.title}
                        description={service.description}
                        link={service.link}
                    />
                ))
            }
        </div>
    );
};

export default TabStyle5;