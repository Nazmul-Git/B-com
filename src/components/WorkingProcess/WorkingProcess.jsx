import React from 'react';

const WorkingProcess = ({item}) => {
    return (
        <div className="col-lg-4 md-mb-40">
            <div className="process-item">
                <div className="icon-image">
                    <img src={item.img} alt="Process Icon" />
                </div>
                <div className="content-txt">
                    <h4 className="title">{item.title}</h4>
                    <p className="desc">{item.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;