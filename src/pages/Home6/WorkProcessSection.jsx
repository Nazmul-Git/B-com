import React from 'react';

// Import images
import icon1 from '../../assets/images/process/style1/icon-1.png';
import icon2 from '../../assets/images/process/style1/icon-2.png';
import icon3 from '../../assets/images/process/style1/icon-3.png';
import WorkingProcess from '../../components/WorkingProcess/WorkingProcess';

const processItems = [
    {
        id: 1,
        img: icon1,
        title: "Business Strategy",
        desc: "Vestibulum lectus mauris ultrices eros in. Cursus sit amet dictum sit amet. Adipiscing tristique risus nec feugiat"
    },
    {
        id: 2,
        img: icon2,
        title: "Idea Validation",
        desc: "Vestibulum lectus mauris ultrices eros in. Cursus sit amet dictum sit amet. Adipiscing tristique risus nec feugiat"
    },
    {
        id: 3,
        img: icon3,
        title: "Implementation",
        desc: "Vestibulum lectus mauris ultrices eros in. Cursus sit amet dictum sit amet. Adipiscing tristique risus nec feugiat"
    }
];

const WorkProcessSection = () => {
    return (
        <div className="rs-process process-style1 pt-125 pb-130 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50">
                    <span className="sub-text">Work process</span>
                    <h2 className="title">How we work</h2>
                </div>
                <div className="process-bg-wrap">
                    <div className="row">
                        {processItems.map((item) => (
                            <WorkingProcess key={item.id} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcessSection;
