import React from "react";
import SubProject from './SubProject.jsx'


const Project = ({projects}) => {

    

    return (
        <div className="Project">
            
            {projects.map((project, index) => (
                <SubProject
                    key={index}
                    image={project.image}
                    projectname={project.projectname}
                    description={project.description}
                    more={project.more}
                />
            ))}
        </div>
         
    )
}

export default Project;