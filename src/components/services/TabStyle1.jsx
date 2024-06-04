import React from 'react';

const ServiceTabStyle1 = ({tabstyleClass}) => {
    return (
        <div className={`rs-tab-main ${tabstyleClass ? tabstyleClass : 'tab-style2'}`}>
            <div className='tab-main-wrap'>
                Tab Style 1
            </div>
        </div>
    );
};

export default ServiceTabStyle1;