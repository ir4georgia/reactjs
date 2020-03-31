import React, { Component } from 'react';
import clickSound from '../Media/clicker.mp3'

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", birthdate: '', showMyForm: true };
    this.state.respdata = { username: "Blackie", email: "joemama@outlook.com", birthdate: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

    const data = new FormData(event.target);

    fetch('https://www.turnerdigitalads.com/Otto/catchme.php', {
      method: 'POST',
      body: data,
    })
      .then(response => response.json())
      .then(jsonStr => { this.setState({ respdata: jsonStr }) })
      .then(clearForm => { this.setState({ username: "", email: "", birthdate: '' }) })
      .then(resetMPForm => { this.setState({ showMyForm: false }) })
      .catch(function (error) { console.log(error); })
  }

  handleClick(event) {
    //give user a click sound
    var snd = new Audio(clickSound);
    snd.addEventListener("ended", function () {
      snd.currentTime = 0;
    });
    snd.play()
    
    this.setState({ showMyForm: true });
  }

  render() {
    return (
      <div className="container">
        {this.state.showMyForm &&
          <form id="mpForm" className="form-horizontal" onSubmit={this.handleSubmit}>

            <fieldset id="formFieldset" className="form-group border">
              <legend id="formLegend">Submit Form Testing</legend>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="username">Enter username</label>
                <input className="col-sm-6 form-control" id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username} placeholder="Name" required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="email">Enter your email</label>
                <input className="col-sm-6 form-control" id="email" name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="email" required />
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="birthdate">Enter your birth date</label>
                <input className="col-sm-6 form-control" id="birthdate" name="birthdate" type="date" onChange={this.handleChange} value={this.state.birthdate} placeholder="birthdate" required />
              </div>
              <div className="form-group row">
                <div className="col-sm-2 col-form-label">
                  <button className="btn btn-success" type="submit" >Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
        }
        {!this.state.showMyForm &&
          <React.Fragment>
            <h4>Results</h4>
            <table border="1">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td><td>{this.state.respdata.username}</td>
                </tr>
                <tr>
                  <td>Email</td><td>{this.state.respdata.email}</td>
                </tr>
                <tr>
                  <td>Birthdate</td><td>{this.state.respdata.birthdate}</td>
                </tr>
                <tr>
                  <td>SERVER</td><td>{this.state.respdata.server}</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary" type="submit" onClick={this.handleClick} >Reset</button>
          </React.Fragment>
        }
      </div>
    );
  }
}
export default MyForm