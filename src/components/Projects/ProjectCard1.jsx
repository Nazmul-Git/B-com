import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard1 = ({ image, category, title, categoryLink, titleLink, description, isTextContentFalse,imageInLink }) => {
    return (
        <div className="project-item">
            {
                imageInLink ?
                    <div className="project-img">
                        <Link to={titleLink}><img src={image} alt="Images" /></Link>
                    </div> 
                    :
                    <div className="project-img">
                        <img src={image} alt="Images" />
                    </div>
            }
            <div className="project-content">

                {
                    isTextContentFalse ?
                        <>
                            <span className="category">
                                <Link to={categoryLink}>{category}</Link>
                            </span>
                            <h5 className="title">
                                <Link to={titleLink}>{title}</Link>
                            </h5>
                        </> :
                        <div className="content-txt">
                            <span className="category">
                                <Link to={categoryLink}>{category}</Link>
                            </span>
                            <h5 className="title">
                                <Link to={titleLink}>{title}</Link>
                            </h5>
                        </div>
                }
                {
                    description &&
                    <div className="description"><p>{description}</p></div>
                }
            </div>
        </div>
    );
};

export default ProjectCard1;