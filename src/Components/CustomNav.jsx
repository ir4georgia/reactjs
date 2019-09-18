import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FNAGun from './FNAGun.jsx';
import About from './About.jsx';
import logo from '../logo.svg';
import Home from './Home.jsx';

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
                                <li><Link to={'/react/fnagun'} className="nav-link">FNAGun</Link></li>
                                <li><Link to={'/react/about'} className="nav-link">About</Link></li>
                            </ul>
                            {/* <form className="form-inline mt-2 mt-md-0">
                                <button className="btn btn-success pull-right"><span className="glyphicon glyphicon-ok"></span>{this.state.value}</button>
                            </form> */}
                        </div>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/react" component={Home}/>
                    <Route path='/react/fnagun' component={FNAGun} />
                    <Route path='/react/about' component={About} />
                </Switch>
            </Router>
        )
    }
}