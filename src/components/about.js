import React, {Component} from 'react';
import '../styles/about.css'


export default class About extends Component {
    render() {
        return(
            <div id="about" class="main-color-2">
                <div id="blurb" class="column">
                    <h2>About me</h2>
                    <p>I am a recent graduate of the Computer Systems Technology program at BCIT.</p>
                </div>
                <div id="img-div" class="column">
                    <img src={require('../content/portrait.jpg')} alt="me" id="portrait"></img>
                </div>
                <div id="info" class="column">
                    <ul>
                        <li><b>Full Name </b> <p>Nathaniel Lemke</p></li>
                        <li><b>Location </b> <p>Burnaby, British Columbia</p></li>
                        <li><b>Phone </b> <p>250 877 8077</p></li>
                        <li><b>Email </b> <p>Nateglemke@gmail.com</p></li>
                    </ul>
                </div>
            </div>
        );
    }
}