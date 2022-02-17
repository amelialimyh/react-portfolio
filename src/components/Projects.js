import React from 'react';
import PROJECTS from '../data/projects';

// create a stateless function 
// need to state props IN INPUT COS IT CANNOT BE DETECTED IN THE FUNCTION'S SYNTAX
const Project = props => {
    const { title, image, description, link } = props.project;
    
    return (
        // inline-block makes it places the cards side-to-side
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 200, height: 120 }}/>    
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}

const Projects = () => (
    <div>
        <h2>Highlighted projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)

export default Projects;