import React, {Component} from 'react';
import '../styles/about.css'


export default class About extends Component {
    render() {
        return(
            <div id="about" class="bg-color">
                <a class="anchor-point" id="a-about"></a>
                <div id="blurb" class="column bg-color black-text">
                    <h2>About me</h2>
                    <p>I am a recent graduate of the Computer Systems Technology program at BCIT, which I took with the Technical Programming option.
                       In my time at school I have completed various team-based and solo programming projects. 
                       I am passionate about coding and enjoy learning new langauages and techniques. 
                    </p>
                    <p>I am currently searching for new job opportunities, if you are interested, my contact information is posted on this site.</p>
                </div>
                <div id="img-div" class="column bg-color black-text">
                    <img src={require('../content/portrait.jpg')} alt="me" id="portrait"></img>
                </div>
                <div id="info" class="column bg-color black-text">
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