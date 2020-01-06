import React, {Component} from 'react';
import '../styles/skills.css';

export default class Skills extends Component {
    render() {
        return(
            <div id="skills" class="main-color-1">
                <div id="skills-container" class="bg-color">
                    <img src={require('../content/htmlCssJs.png')} class="skillImg" width="75px" height="75px"></img>
                    <img src={require('../content/node.png')} class="skillImg" width="75px" height="75px"></img>
                    <img src={require('../content/react.png')} class="skillImg" width="150px" height="75px"></img>
                    <img src={require('../content/mongo.png')} class="skillImg" width="125px" height="75px"></img>
                </div>
            </div>
        );
    }
}