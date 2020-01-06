import React, {Component} from 'react';
import '../styles/projects.css';

export default class Projects extends Component {
    render() {
        return(
            <div id="projects" class="bg-color">
                <h2>More detail on my project will be added later</h2>
                <h2>Here is a link to my github</h2>
                <a class="rounded-button" href="https://github.com/NateLemke">
                    <img id="git-icon" src={require('../content/git.png')} width="40px" height="40px"></img>
                    Github
                </a>
            </div>
        );
    }
}