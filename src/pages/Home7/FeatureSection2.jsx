import React from 'react';
import FeatureItem from '../../components/Features/FeatureItem';
import ChecklistItem from '../../components/Features/ChecklistItem';
import circleImg from '../../assets/images/feature/style7/services/circle.png';
import mainImg from '../../assets/images/feature/style7/services/main-img.png';
import img1 from '../../assets/images/feature/style7/services/img-1.png';
import img2 from '../../assets/images/feature/style7/services/img-2.png';
import { Link } from 'react-router-dom';

const featureImages = [
    { className: 'one', src: mainImg, alt: 'Main Image' },
    { className: 'two scale2', src: img1, alt: 'Image 1' },
    { className: 'three scale2', src: img2, alt: 'Image 2' }
];

const checklistItems = [
    'Pick up the tool',
    'Integrate it on your business',
    'Let\'s monitor the engagement'
];

const FeatureSection2 = () => {
    return (
        <div id="rs-feature" className="rs-feature feature-style2 feature-modify5 pt-140 pb-140 md-pt-110 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title">
                            <h2 className="title title5 heading-border heading-pink pb-26">
                                Pace Of Change Is Power Law In Financial Services
                            </h2>
                            <p className="desc pb-30">
                                Condimentum mattis pellentesque id nibh tortor id aliquet. Amet commodo nulla facilisi nullam vehicula ipsum. Sit amet justo donec enim diam vulputate ut pharetra. Pellentesque pulvinar pellentesque habitant morbi A good Content Writer must have excellent.
                            </p>
                            <ul className="check-lists check-list6">
                                {checklistItems.map((item, index) => (
                                    <ChecklistItem key={index} text={item} />
                                ))}
                            </ul>
                            <div className="btn-part mt-35">
                                <Link className="readon consultant get-pink" to="/about-us">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="images-wrap2">
                            <img src={circleImg} alt="Images" />
                            {featureImages.map((image, index) => (
                                <FeatureItem
                                    key={index}
                                    className={image.className}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection2;
