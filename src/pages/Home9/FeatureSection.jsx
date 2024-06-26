import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ChecklistItem from '../../components/Features/ChecklistItem';
import { Link } from 'react-router-dom';
import featureImage from '../../assets/images/feature/feature-img9.png';

const FeatureSection = ({buttonText,buttonLink}) => {
    const features = [
        "Turn your ideas and story into a book.",
        "Become a #1 bestseller or we pay $100k",
        "Boost your credibility and authority.",
        "Attract more clients and grow your business."
    ];

    return (
        <div className="rs-feature feature-style2 feature-modify5 gray-bg10 pt-140 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <SectionTitle
                            subText="Ebook preview"
                            subtextTitleClass={'sub-text sub-text2 sub-text5'}
                            title="Your have needs these habits to grow the business faster"
                            otherClass={'pb-27'}
                            description="Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Sed vulputate mi sit amet. Quis lectus nulla at volutpat diam ut venenatis tellus Feel free to share samples of your published."
                            detailClass={'desc pb-25'}

                        />
                        <ul className="check-lists check-list7">
                            {features.map((item, index) => (
                                <ChecklistItem key={index} text={item} />
                            ))}
                        </ul>
                        <div className="feature-btn mt-40">
                            <Link className="readon consultant get-green3" to={buttonLink}>{buttonText}</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="images-wrap3">
                            <img src={featureImage} alt="Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;
