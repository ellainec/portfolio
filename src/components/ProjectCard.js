import React from 'react';
import gitLogo from '../img/GitHub-Mark-32px.png';

const ProjectCard = (props) => {
    return(
        <div className="card projectCard">
            <div className="card-body">
                <img className="card-img-top img-fluid" src={props.pic} alt="project thumbnail" />
            <div className="projectHeader flex-row">
                <a href={props.url}> <img src={gitLogo} alt="Github" /> </a>
                <h5 className="card-title">{props.name}</h5>
            </div>
                <h6 className="card-subtitle text-muted">{props.techList}</h6>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}
export default ProjectCard;
