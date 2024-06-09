import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Projects2 = ({projectsData, categories,}) => {
    const [activeFilter, setActiveFilter] = useState('*');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const filteredProjects = activeFilter === '*'
        ? projectsData
        : projectsData.filter(project => project.filters.includes(activeFilter));
    return (
        <div className="rs-project project-style7 project-modify4 pt-125 pb-140 md-pt-80 md-pb-80">
            <div className="container custom10">
                <div className="sec-title text-center mb-50">
                    <h2 className="title title12">
                        <span className="watermark">Our case studies</span>
                    </h2>
                </div>
                <div className="gridFilter mb-47 text-center">
                    <div className="portfolio-filter">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={activeFilter === category.filter ? 'active' : ''}
                                onClick={() => handleFilterChange(category.filter)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="row grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className={`col-xl-4 col-md-6 grid-item mb-30 ${project.filters.join(' ')}`}>
                            <div className="project-item">
                                <div className="project-img">
                                    <img src={project.image} alt="project" />
                                </div>
                                <div className="project-content">
                                    <div className="project-inner">
                                        <span className="category">
                                            <Link to={project.link}>{project.category}</Link>
                                        </span>
                                        <h5 className="title">
                                            <Link to={project.link}>{project.title}</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects2;