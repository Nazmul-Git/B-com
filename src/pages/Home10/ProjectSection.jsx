import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import pro1 from '../../assets/images/project/style3/pro-1.jpg';
import pro2 from '../../assets/images/project/style3/pro-2.jpg';
import pro3 from '../../assets/images/project/style3/pro-3.jpg';
import Projects from '../../components/Projects/Projects';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            image: pro1,
            categoryLink: '/portfolio-single',
            category: 'Digital marketing',
            titleLink: '/portfolio-single',
            title: 'Alex Brand Promotion',
        },
        {
            id: 2,
            image: pro2,
            categoryLink: '/portfolio-single',
            category: 'App Design',
            titleLink: '/portfolio-single',
            title: 'Business Planning',
        },
        {
            id: 3,
            image: pro3,
            categoryLink: '/portfolio-single',
            category: 'Financial advisory',
            titleLink: '/portfolio-single',
            title: 'Investment Plan',
        },
        {
            id: 4,
            image: pro1,
            categoryLink: '/portfolio-single',
            category: 'Business Services',
            titleLink: '/portfolio-single',
            title: 'Alex Brand Promotion',
        },
        
    ];

    return (
        <div className="rs-project project-style4 project-modify1 gray-bg5 pt-125 pb-110 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <SectionTitle
                            otherClass={'mb-50'}
                            subText={true}
                            subtextTitle={'Our Projects'}
                            subtextTitleClass={'sub-text sub-text2'}
                            title={'explore case studies'}
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="project-button pro-btn2 text-right md-left mb-50">
                            <Link to="/portfolio-single">
                                <span className="btn-txt">View all projects</span>
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="slider project-slide-1">
                    <Projects
                        projects={projects}
                        preview={3}
                        isTextContentFalse={true}
                        imageInLink={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
