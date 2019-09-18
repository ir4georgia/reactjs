import React, { Component } from 'react';
import Clock from './Clock';

class About extends Component {
  render() {
    return (
        <div>
          <h2>About</h2>
          <p>This is a development app to help Michael learn about React.js</p>
          <Clock/>
          <p>This page is a component with a component</p>
        </div>
    );
  }
}

export default About;