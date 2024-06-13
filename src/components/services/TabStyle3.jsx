import React from 'react';
import TabThreeCard from './TabThreeCard';

const TabStyle3 = ({ services }) => {
    return (
        <div className="row">
            {
                services.map((service, index) => (
                    <TabThreeCard key={index}
                        service={service}
                        index={index}
                    />
                ))
            }
        </div>
    );
};

export default TabStyle3;