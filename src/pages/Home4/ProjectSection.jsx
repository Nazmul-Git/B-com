import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Projects from '../../components/Projects/Projects';
import { Link } from 'react-router-dom';

const ProjectSection = ({ title, mainClass, details, detailClass, otherClass, titleClass, project1, project2, project3, project4, project5, project6, projectShape1, projectShape2 }) => {

    const projects = [
        {
            id: 1,
            category: 'Digital marketing',
            title: 'Market Analysis',
            image: project1
        },
        {
            id: 2,
            category: 'App Design',
            title: 'Market Analysis',
            image: project2
        },
        {
            id: 3,
            category: 'Development Service',
            title: 'Investment Plan',
            image: project3
        },
        {
            id: 4,
            category: 'Marketing Service',
            title: 'Risk Management',
            image: project4
        },
        {
            id: 5,
            category: 'Development Service',
            title: 'Investment Plan',
            image: project5
        },
        {
            id: 6,
            category: 'Branding Design',
            title: 'Inventory Management',
            image: project6
        }
    ];

    return (
        <div className="rs-project project-style1 gray-bg18 pt-125 pb-130 md-pt-80 md-pb-80">
            <div className="container">
                <SectionTitle
                    title={title}
                    titleClass={titleClass}
                    details={details}
                    detailClass={detailClass}
                    mainClass={mainClass}
                    otherClass={otherClass}
                    borderStyle={true}
                />
            </div>
            <Projects
                projects={projects}
            />

            <div className="pro-shape">
                <div className="pro-animate one">
                    <img className="veritcal2" src={projectShape1} alt="Images" />
                </div>
                <div className="pro-animate two">
                    <img className="veritcal4" src={projectShape2} alt="Images" />
                </div>
            </div>
            {/* CTA */}
            <div className="rs-cta cta-style1 pt-50">
                <div className="container">
                    <div className="content-wrap bg2">
                        <div className="row y-middle">
                            <div className="col-lg-7 md-mb-30">
                                <SectionTitle
                                    title={'Have Project in Mind?'}
                                    titleClass={'title title5 heading-border pb-10'}
                                    details={'Tincidunt nunc pulvinar sapien et ligula ullamcorper. Eu tincidunt tortor aliquam nulla facilisi. Id venenatis a condimentum vitae sapien pellentesque.'}
                                    detailClass={'desc desc6'}
                                />
                            </div>
                            <div className="col-lg-5">
                                <div className="cta-btn text-right md-left">
                                    <Link className="readon cta-btn lets-talks" to="/contact-us-1">
                                        <span className="btn-txt">Let's Talk</span>
                                        <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
