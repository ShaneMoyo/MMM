import React, { Component } from 'react'


export default class Header extends Component {
  
  render(){

    return(
      <div>
        <ul>
          <li style={{display : 'inline-block'}}>Massage</li>
          <li style={{display : 'inline-block'}}>Minerals</li>
          <li style={{display : 'inline-block'}}>Movement</li>
        </ul>
      </div>
    );
  }
}