import React, { Component } from 'react';
import clickSound from '../Media/clicker.mp3'

class WOD extends Component {
    constructor(props) {
        super(props);
        this.state = { word: "", wordDefinition: "", date_added: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        //give user a click sound
        var snd = new Audio(clickSound);
        snd.addEventListener("ended", function () {
            snd.currentTime = 0;
        });
        snd.play()

        fetch('https://www.turnerdigitalads.com/WoD/getWOD.php', {
            method: 'GET',
            // body: data,
        })
            .then(response => response.json())
            .then(jsonStr => { this.setState(jsonStr) })
            .catch(function (error) { console.log(error); })
    }

    componentDidMount() {
        fetch('https://www.turnerdigitalads.com/WoD/getWOD.php', {
            method: 'GET',
            // body: data,
        })
            .then(response => response.json())
            .then(jsonStr => { this.setState(jsonStr) })
            .catch(function (error) { console.log(error); })
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-8">
                    <form id="mpForm" className="form-horizontal" onSubmit={this.handleSubmit}>
                        <fieldset id="formFieldset" className="form-group border">
                            <legend id="formLegend">Word O' Day</legend>

                            <h4>Word: <b>{this.state.word}</b></h4>
                            <p>{this.state.wordDefinition}</p>
                            <p>Added: {this.state.date_added}</p>
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <button className="btn btn-success" type="submit" >Get Another</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
export default WOD