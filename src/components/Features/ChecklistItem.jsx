import React from 'react';

const ChecklistItem = ({ text }) => {
    return (
        <li className="list-item">
            <span className="icon-list-icon">
                <i className="ri-checkbox-circle-line"></i> {/* Remix Icon */}
            </span>
            <span className="list-text">{text}</span>
        </li>
    );
};

export default ChecklistItem;
