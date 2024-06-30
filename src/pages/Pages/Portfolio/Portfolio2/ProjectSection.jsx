import React from 'react';
import ProjectItem from '../../../../components/Projects/ProjectItem';

// Import project images
import pro1Img from '../../../../assets/images/project/style4/pro-1.jpg';
import pro2Img from '../../../../assets/images/project/style4/pro-2.jpg';
import pro3Img from '../../../../assets/images/project/style4/pro-3.jpg';
import pro4Img from '../../../../assets/images/project/style4/pro-4.jpg';
import pro5Img from '../../../../assets/images/project/style4/pro-5.jpg';
import pro6Img from '../../../../assets/images/project/style4/pro-6.jpg';

// Project data array
const projects = [
    { name: "Market Analysis", imgSrc: pro1Img, category: "Digital marketing", url: "/portfolio-single" },
    { name: "Feasibility Study", imgSrc: pro2Img, category: "App Design", url: "/portfolio-single" },
    { name: "Alex Brands", imgSrc: pro3Img, category: "Financial advisory", url: "/portfolio-single" },
    { name: "Business Planning", imgSrc: pro4Img, category: "Business Services", url: "/portfolio-single" },
    { name: "Market Value", imgSrc: pro5Img, category: "Digital marketing", url: "/portfolio-single" },
    { name: "Financial Advisor", imgSrc: pro6Img, category: "Financial advisory", url: "/portfolio-single" }
];


const ProjectSection = () => {
    return (
        <div className="rs-project project-style7 pt-130 pb-130 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={index}
                            name={project.name}
                            imgSrc={project.imgSrc}
                            category={project.category}
                            url={project.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
