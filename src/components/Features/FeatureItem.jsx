import React from 'react';

const FeatureItem = ({ className, src, alt }) => {
    return (
        <div className={`feature-img ${className}`}>
            <img className={className} src={src} alt={alt} />
        </div>
    );
};

export default FeatureItem;
