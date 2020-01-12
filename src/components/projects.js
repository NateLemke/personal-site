import React, {Component} from 'react';
import '../styles/projects.css';

class ProjectCard extends Component {
    render() {
        return(
            <a href={this.props.link}>
                <div class="project-card main-color-1 grow">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.desc}</p>
                </div>
            </a>
        ); 
    }
} 

export default class Projects extends Component {
    render() {
        return(
            <div id="projects" class="bg-color">
                <a class="anchor-point" id="a-projects"></a>
                <ProjectCard title={"Reservoir Rescue"}  link={"https://github.com/NateLemke/ReservoirRescue"} 
                desc={`A web-based pipe connecting game. 
                This team project used html and css for the menus and Javascript and the Phaser framework for gameplay. 
                SQL and PHP were used to store leaderboard scores.`}/>
                <ProjectCard title={"Memory game"}  link={"https://github.com/NateLemke/MemoryGame"} 
                desc={`A simple pattern memory game made using Node.js and Express.
                Uses a variable size grid of tiles with randomized patterns. Gameplay is handled with Javascript and 
                leaderboard data is stored using MongoDB.`}/>
                <h2 class="black-text">More details and other projects can be found on my Github</h2>
                <a href="https://github.com/NateLemke">
                    <img id="git-icon" class="grow" src={require('../content/git.png')} width="150px" height="150px"></img>
                </a>
            </div>
        );
    }
}