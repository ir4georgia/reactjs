import React, { Component } from 'react';
import './App.css';
import CustomNav from './Components/CustomNav.jsx';
import CustomFooter from './Components/CustomFooter.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNav/>
        {/* This is just the bare-bones */}
        <CustomFooter />
      </div>
    );
  }
}

export default App;