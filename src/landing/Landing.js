import React, { Component } from 'react';
import Header from '../header/Header';
import './landing.css'

export default class Landing extends Component {
  
  render(){

    return(
      <div className="landing">
        <Header className="header"/>
      </div>
    );
  }
}