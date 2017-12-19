import React, { Component } from 'react';
import './header.css';


export default class Header extends Component {
  state = { 
    showList: false,
    listId: null
  }
  render(){
    const massageList = 
      <ul className="listBox">
        <li>Massage List Item 1</li>
        <li>Massage List Item 2</li>
        <li>Massage List Item 3</li>
      </ul>;
    const mineralList = 
      <ul className="listBox">
        <li>Mineral List Item 1</li>
        <li>Mineral List Item 2</li>
        <li>Mineral List Item 3</li>
      </ul>;
    const movementList = 
    <ul className="listBox">
      <li>Movement List Item 1</li>
      <li>Movement List Item 2</li>
      <li>Movement List Item 3</li>
    </ul>;
    return(
      <div className="header">
        <ul className="nav">
          <li className="navLinks" onClick={() => this.setState({ showList: !this.state.showList, listId: 'Massage'})}>
            { (this.state.showList && this.state.listId === 'Massage') ? massageList : '⮟ Massage' }
          </li>
          <li className="navLinks" onClick={() => this.setState({ showList: !this.state.showList, listId: 'Mineral'})}>
          { (this.state.showList && this.state.listId === 'Mineral') ? mineralList : '⮟ Minerals' }
          </li>
          <li className="navLinks" onClick={() => this.setState({ showList: !this.state.showList, listId: 'Movement'})}>
          { (this.state.showList && this.state.listId === 'Movement') ? movementList : '⮟ Movement' }
          </li>
        </ul>
      </div>
    );
  }
}