import React from 'react';
import FeatureItem from '../../components/Features/FeatureItem';
import circleImg from '../../assets/images/feature/style7/circle.png';
import mainImg from '../../assets/images/feature/style7/main-img.png';
import img1 from '../../assets/images/feature/style7/img-1.png';
import img2 from '../../assets/images/feature/style7/img-2.png';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const featureImages = [
    { className: 'one', src: mainImg, alt: 'Main Image' },
    { className: 'two scale', src: img1, alt: 'Image 1' },
    { className: 'three scale', src: img2, alt: 'Image 2' }
];

const FeatureSection = () => {
    return (
        <div className="rs-feature feature-style2 feature-modify5 gray-bg8 pt-140 pb-140 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="images-wrap">
                            <img src={circleImg} alt="Circle" />
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
                    <div className="col-lg-6">
                        <SectionTitle
                            titleClass={'title title5'}
                            otherTitleClass={'heading-border heading-pink pb-27'}
                            title={'Save your finances for the future'}
                            details={'Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Sed vulputate mi sit amet. Quis lectus nulla at volutpat diam ut venenatis tellus Feel free to share samples of your published.'}
                            detailClass={'desc pb-25'}
                            details2={'Commodo sed egestas egestas fringilla phasellus. Interdum consectetur libero id faucibus nisl tincidunt eget. Tincidunt vitae semper lectus nulla  volutpat'}
                            detailClass2={'desc'}
                            btnPart={true}
                            btnClass={'feature-btn mt-45'}
                            linkClass={'readon consultant get-pink'}
                            href={'/about-us'}
                            linkTitle={'Get Started'}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
