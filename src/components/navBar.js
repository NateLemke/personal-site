import React, { Component } from 'react';
import '../styles/navBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div id="nav-bar">
                <ul id="nav-list" class="main-color-1">
                <li class="nav-item">
                        <a class="nav-link" href="#top">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#a-about">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#a-projects">PROJECTS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#a-contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        );
    }
}
