import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard1 = ({ image, category, title, link }) => {
    return (
        <div className="project-item">
            <div className="project-img">
                <img src={image} alt="Images" />
            </div>
            <div className="project-content">
                <span className="category">
                    <Link to={link}>{category}</Link>
                </span>
                <h5 className="title">
                    <Link to={link}>{title}</Link>
                </h5>
            </div>
        </div>
    );
};

export default ProjectCard1;