import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FNAGun from './FNAGun.jsx';
import About from './About.jsx';
import logo from '../logo.svg';
import Home from './Home.jsx';
import MyForm from './form.jsx';
import Grid from './Grid.jsx';
import WOD from './wod.jsx'

export default class CustomNav extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <Router>
                <header className="customHeader fixed-top" >  
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                        <a className="navbar-brand" href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> 
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul data-toggle="collapse" className="navbar-nav mr-auto">
                                <li className="nav-item active"><Link to={'/react/'} className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to={'/react/fnagun'} className="nav-link">FNAGun</Link></li>
                                <li className="nav-item"><Link to={'/react/form'} className="nav-link">Form</Link></li>
                                <li className="nav-item"><Link to={'/react/grid'} className="nav-link">Grid</Link></li>
                                <li className="nav-item"><Link to={'/react/wod'} className="nav-link">Word O' Day</Link></li>
                                <li className="nav-item"><Link to={'/react/about'} className="nav-link">About</Link></li>
                            </ul>
                
                        </div>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/react" component={Home}/>
                    <Route path='/react/fnagun' component={FNAGun} />
                    <Route path='/react/form' component={MyForm} />
                    <Route path='/react/grid' component={Grid} />
                    <Route path='/react/wod' component={WOD} />
                    <Route path='/react/about' component={About} />
                </Switch>
            </Router>
        )
    }
}