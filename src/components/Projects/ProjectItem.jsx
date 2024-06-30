import { Link } from "react-router-dom";

const ProjectItem = ({ name, imgSrc, category, url }) => {
    return (
        <div className="col-xl-4 col-md-6 mb-30 xl-mb-30">
            <div className="project-item">
                <div className="project-img">
                    <img src={imgSrc} alt={name} />
                </div>
                <div className="project-content">
                    <Link className="p-icon" to={url}></Link>
                    <div className="project-inner">
                        <h5 className="title"><Link to={url}>{name}</Link></h5>
                        <span className="category"><Link to={url}>{category}</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProjectItem;