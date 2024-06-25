import React from 'react';

const ChecklistItem = ({ text }) => {
    return (
        <div className="list-item">
            <span className="icon-list-icon">
                <i className="ri-checkbox-circle-line"></i>
            </span>
            <span className="list-text">{text}</span>
        </div>
    );
};

export default ChecklistItem;
