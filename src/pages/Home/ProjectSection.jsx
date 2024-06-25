import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Projects from '../../components/Projects/Projects';

const ProjectSection = ({ title, mainClass, otherClass, titleClass, port1, port2, port3, port4 }) => {

    const projects = [
        {
            id: 1,
            category: 'Digital marketing',
            title: 'Market Analysis',
            categoryLink: '/portfolio-single',
            titleLink: '/portfolio-single',
            image: port1
        },
        {
            id: 2,
            category: 'App Design',
            title: 'Market Analysis',
            categoryLink: '/portfolio-single',
            titleLink: '/portfolio-single',
            image: port2
        },
        {
            id: 3,
            category: 'Development Service',
            title: 'Investment Plan',
            categoryLink: '/portfolio-single',
            titleLink: '/portfolio-single',
            image: port3
        },
        {
            id: 4,
            category: 'Marketing Service',
            title: 'Risk Management',
            categoryLink: '/portfolio-single',
            titleLink: '/portfolio-single',
            image: port4
        },
        {
            id: 5,
            category: 'Development Service',
            title: 'Investment Plan',
            categoryLink: '/portfolio-single',
            titleLink: '/portfolio-single',
            image: port1
        },
        {
            id: 6,
            category: 'Branding Design',
            title: 'Inventory Management',
            categoryLink: '/portfolio-single',
            titleLink: '/portfolio-single',
            image: port2
        }
    ];

    return (
        <div className="rs-project project-style1 project-modify3">
            <div className="project-overlay bg19">
                <div className="container">
                    <SectionTitle
                        title={title}
                        mainClass={mainClass}
                        otherClass={otherClass}
                        titleClass={titleClass}
                    />
                </div>
                <div className="slider project-slide-1">
                    <Projects
                        projects={projects}
                        preview={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
