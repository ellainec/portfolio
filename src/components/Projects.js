import React from 'react';
import ProjectCard from './ProjectCard';
import h2no from '../img/h2no.PNG';
import crowdcoin from '../img/CrowdCoin3.PNG';

const Projects = () => {

    return(
        <div className="projectsDiv">
            <hr />
            <h4> Projects </h4>
            <div className="d-flex flex-wrap justify-content-between">
                <ProjectCard pic={h2no} name="h2NO.xyz" techList="Phaser.js, PHP, MySQL, HTML, CSS"
                    description="Myself and 4 other team members built this side scroller game to promote water conservation
                    for our term project at BCIT. One of our biggest challenges was a big drop in FPS after numerous
                    sprinklers (with particles) were placed in the game and playing on mobile was impossible. I tackled
                    this problem by cutting down the number of sprinklers and reusing them to move with the player. Besides
                    from general contribution to the game code, I set up a leaderboard with AJAX and MySQL and had the app
                    hosted on Digital Ocean"/>
                <ProjectCard pic={crowdcoin} name="CrowdCoin" techList="React, Next.js, Node.js, Solidity, Web3, Mocha"
                    description="This was a project I completed alongside a udemy course to learn Ethereum and Solidity. It is based on
                    kickstarter with a revision to improve transparency by requiring the organizer to get approval the contributors
                    before any funds can be spent."/>
            </div>
        </div>
    );
}

export default Projects;