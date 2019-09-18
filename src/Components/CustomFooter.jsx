import React, { Component } from 'react';

export default class CustomFooter extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return (
            <footer className="bg-primary fixed-bottom">
                <div className="container-fluid">
                    <div className="row my-3">   
                        <div className="col-md-4 text-white font-weight-bold text-center">ReactJS - Demo App v1.0.13</div>
                        <div className="col-md-4 text-white font-weight-bold text-center"></div>
                        <div className="col-md-4 text-white font-weight-bold text-center">Michael Pierce</div>
                    </div>
                </div>
            </footer>
        )
    }
}