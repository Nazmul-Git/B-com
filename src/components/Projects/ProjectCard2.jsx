import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard2 = ({ link, image, category, title }) => {
    return (
        <div className="project-item swiper-slide">
            <div className="project-img">
                <Link to={link}><img src={image} alt="Images" /></Link>
            </div>
            <div className="project-content">
                <span className="category"><Link to={link}>{category}</Link></span>
                <h5 className="title"><Link to={link}>{title}</Link></h5>
            </div>
        </div>
    );
};

export default ProjectCard2;