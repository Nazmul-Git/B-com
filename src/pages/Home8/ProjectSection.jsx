import React from 'react';
import pro1 from '../../assets/images/project/style2/pro1.png';
import pro2 from '../../assets/images/project/style2/pro2.png';
import pro3 from '../../assets/images/project/style2/pro3.png';
import pro4 from '../../assets/images/project/style2/pro4.png';
import pro5 from '../../assets/images/project/style2/pro5.png';
import pro6 from '../../assets/images/project/style2/pro6.png';
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
            title: 'Market Analysis',
            description: 'Malesuada bibendum arcu vitae elementum semper eget duis at tellus at urna…'
        },
        {
            id: 2,
            image: pro2,
            categoryLink: '/portfolio-single',
            category: 'App Design',
            titleLink: '/portfolio-single',
            title: 'Feasibility Study',
            description: 'Malesuada bibendum arcu vitae elementum semper eget duis at tellus at urna…'
        },
        {
            id: 3,
            image: pro3,
            categoryLink: '/portfolio-single',
            category: 'Financial advisory',
            titleLink: '/portfolio-single',
            title: 'Alex Brands',
            description: 'Malesuada bibendum arcu vitae elementum semper eget duis at tellus at urna…'
        },
        {
            id: 4,
            image: pro4,
            categoryLink: '/portfolio-single',
            category: 'Business Services',
            titleLink: '/portfolio-single',
            title: 'Business Planning',
            description: 'Malesuada bibendum arcu vitae elementum semper eget duis at tellus at urna…'
        },
        {
            id: 5,
            image: pro5,
            categoryLink: '/portfolio-single',
            category: 'Development Service',
            titleLink: '/portfolio-single',
            title: 'Investment Plan',
            description: 'Malesuada bibendum arcu vitae elementum semper eget duis at tellus at urna…'
        },
        {
            id: 6,
            image: pro6,
            categoryLink: '/portfolio-single',
            category: 'Branding Design',
            titleLink: '/portfolio-single',
            title: 'Inventory Report',
            description: 'Malesuada bibendum arcu vitae elementum semper eget duis at tellus at urna…'
        },
    ];

    return (
        <div className="rs-project project-style10 bg38 pt-140 md-pt-80">
            <div className="container">
                <SectionTitle
                    otherClass={'mb-50'}
                    title={'Explore Case Studies'}
                />
            </div>
            <div className="slider project-slide-4">
                <Projects
                    projects={projects}
                    preview={4}
                />
            </div>
        </div>
    );
};

export default ProjectSection;
