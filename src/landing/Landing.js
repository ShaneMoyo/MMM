import React, { Component } from 'react';
import Header from '../header/Header';
import './landing.css';
import Navigation from '../navigation/Navigation';

export default class Landing extends Component {
  
  render(){

    return(
        <body>
          <section class="hero is-info is-fullheight">
            <Navigation/>
            <div class="hero-body">
              <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                  <h1 class="title">
                    Coming Soon
                  </h1>
                  <h2 class="subtitle">
                    Welcome to Healthihost. blah blah blah 
                  </h2>
                  <div class="box">
                  <div class="field is-grouped">
                    <p class="control is-expanded">
                      <input class="input" type="text" placeholder="Enter your email"/>
                    </p>
                    <p class="control">
                      <a class="button is-info">
                        Notify Me
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </body>
    );
  }
}