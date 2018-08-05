import React from 'react';

const ProjectCard = (props) => {
    return(
        <div className="card projectCard">
            <div className="card-body">
                <img className="card-img-top img-fluid" src={props.pic} alt="project thumbnail" />
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle text-muted">{props.techList}</h6>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}
export default ProjectCard;