import React, {Component} from 'react';
import '../styles/contact.css'

export default class Contact extends Component {
    render() {
        return (
        <div id='contact' class="main-color-2">
            <a class="anchor-point" id="a-contact"></a>
        <div class='col'>
            <img src={require('../content/email.png')} width="100px" height="100px"></img>
            <h2>Nateglemke@gmail.com</h2>
        </div>
        <div class='col'>
        <img src={require('../content/phone.png')} width="100px" height="100px"></img>
            <h2>250 877 8077</h2>
        </div>
        </div> 
        );
    }
}