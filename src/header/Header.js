import React, { Component } from 'react';
import './header.css';


export default class Header extends Component {
  
  render(){

    return(
      <div className="header">
        <ul className="nav">
          <li>▼ Massage</li>
          <li>▼ Minerals</li>
          <li>▼ Movement</li>
        </ul>
      </div>
    );
  }
}