import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import h2no from '../img/h2no.PNG';
import crowdcoin from '../img/CrowdCoin3.PNG';
import blockchain from '../img/blockchain_royale.png';
import nucleoBoard from '../img/nucleo_kit.jpg';
import kolakucoa from '../img/CSA.jpg';
import rentSmart from '../img/rentsmart.PNG';

const Projects = () => {
    const [display, setDisplay] = useState(false);
    return(
        <div className="projectsDiv">
            <hr />
            <h4 id="Projects"> Projects </h4>
            <div className="d-flex flex-wrap justify-content-between columnMobile">
                <ProjectCard pic={nucleoBoard} name="Telus-BCIT IoT Collaboration" techList="C, C++, Mbed OS, STM32 Nucleo board, Quectel BG96 modem, LTE-M, MQTT,
                    Microsoft Azure, AWS"
                    url="https://github.com/ellainec/azureIoTMbed/tree/psm"
                    description="Telus partnered up with BCIT's Applied Research and Innovation to test their new NB-IoT Network (but due to a delays in 
                    the network going live we used LTE-M instead). Telus IoT Starter kits were used to collect environmental data 
                    and sent over LTE-M network to both Microsoft Azure and AWS for visualization and storage. Working alongside 
                    3 other team members, I focused on battery optimization. This included getting familiar with Mbed OS and Quectel BG96 modem, and 
                    writing AT Commands to utilize Power Saving Mode."/>
                <ProjectCard pic={kolakucoa} name="Kolakucoa Website" techList="AWS S3, AWS API Gateway, AWS Lambda, AWS SES, React"
                    url="kolakucoa.com"
                    description="Kolakucoa is a cartoon I co-created as a hobby project with my husband who did all the animation. I made a simple static website 
                    hosted on AWS S3, with a dynamic contact form using and Lambda, API Gateway and SES."
                />
                <ProjectCard pic={rentSmart} name="Rent Smart Android App" techList="Java, Android Studio, City of Vancouver Open Data"
                    url="https://github.com/AlbertLiuCST/RentSmart"
                    description="Rent Smart is an Android app that aims to help renters by providing them with the relevant information they need to know about
                    a potential rental unit before they sign a lease. It uses the following Open Data from Vancouver: Business Licenses, Building Permits, 
                    Current Rental Issues and Crime States. Combined with Google maps, users can enter an address and the app will call the mentioned APIs to get
                    the relevant information based on location and a recommendation will be made on whether the the unit looks OK or highlight any concerns such 
                    as heavy construction in the area."/>
                <ProjectCard pic={h2no} name="h2NO.xyz" techList="Phaser.js, PHP, MySQL, HTML, CSS"
                    url="https://github.com/ellainec/h2no"
                    description="Myself and 4 other team members built this side scroller game to promote water conservation
                    for our term project at BCIT. One of our biggest challenges was a big drop in FPS after numerous
                    sprinklers (with particles) were placed in the game and playing on mobile was impossible. I tackled
                    this problem by cutting down the number of sprinklers and reusing them to move with the player. Besides
                    from general contribution to the game code, I set up a leaderboard with AJAX and MySQL and had the app
                    hosted on Digital Ocean"/>
            </div>
            <div className="collapse" id="moreProjects">
            <div className="d-flex flex-wrap justify-content-between columnMobile">
                <ProjectCard pic={crowdcoin} name="CrowdCoin" techList="React, Next.js, Node.js, Solidity, Web3, Mocha"
                    url="https://github.com/ellainec/CoinBase"
                    description="This was a project I completed alongside a udemy course to learn Ethereum and Solidity. It is based on
                    kickstarter with a revision to improve transparency by requiring the organizer to get approval the contributors
                    before any funds can be spent."/>
                <ProjectCard pic={blockchain} name="Blockchain Royale" techList="Solidity, HTML, CSS, JavaScript"
                    url="https://github.com/BlockchainRoyale"
                    description="Machohacks 2018 was the first hackathon I've attended. Our idea (myself with 4 other team members)
                    was a battle royale meets chess game. The goal was to have the game run on a blockchain so all players have
                    perfect information and to eliminate cheating. We picked Solidity because it was what I knew and I started on the
                    smart contract but it became transparent pretty early on that the gas consumption would be unrealistic (
                    the contract wasn't even finished and each move/transation was costing around $4 according to remix!). We came to the
                    conclusion that if this game was possible it would have to be on another blockchain with faster and lower cost transactions
                    so a more senior member created a prototype with Scala while I helped with game design and a bit on front end." />
            </div>
            </div>
        
            <a data-toggle="collapse" href="#moreProjects" role="button" aria-expanded="false"
                aria-controls="moreProjects" onClick={()=> setDisplay(true)}>
                <h6 className="show-more-button">{display? "Show Less" : "Show More"}</h6>
            </a>
        </div>
    );
}

export default Projects;
