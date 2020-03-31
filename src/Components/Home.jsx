import React, { Component } from 'react';
import hpImage from '../images/eagle-has-landed.jpg'

class Home extends Component {

  componentDidMount() {
  
    // const script = document.createElement("script");
    // script.id="mpjs";
    // script.src = "https://www.googletagservices.com/tag/js/gpt.js";
    // script.async = true;
    // script.innerHTML= 'googletag.pubads().definePassback("/8663477/NCAA", [300, 250]).display();'

    // document.getElementById("muhBox").appendChild(script);

  }
  render() {
    return (
      <div id="muhBox" className="">
        <h2>Home Page</h2>
        <p>This is a development app to help Michael learn about React.js</p>
        <img className="responsive" src={hpImage} alt="Eagle has Landed" />
      </div>
    );
  }
}

export default Home;