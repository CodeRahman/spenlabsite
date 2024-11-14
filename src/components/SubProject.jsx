import  React from  'react';
import './SubProject.css';

const SubProject = (props) => {
    return (
        <div className="SubProject">
            <div className="project-image">
                <img src={props.image} alt={props.projectname} />
            </div>
            <div className="project-details">
                <h2>{props.projectname}</h2>
                <p>{props.description}<a href={props.more} target='_blank'>more</a></p>
            </div>
        </div>
    )
}

export default SubProject;