import React, { Component } from 'react';

class FNAGun extends Component {

  constructor(props) {
    super(props);
    this.state = {
      overall: "init",
      smitee_name: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({overall:"mounted"})
  }

  componentWillUnmount() {
    this.setState({overall:"will Unmount"})
  }


  handleNameChange(event) {
    this.setState({ smitee_name: event.target.value });
    this.setState({ overall: "settingName" });
  }

  handleSubmit(event) {
    this.setState({overall:"submitted"})
    alert('React has smited: ' + this.state.smitee_name);
    event.preventDefault();
    this.setState({ smitee_name: "" })
  }


  render() {
    const formTitle = (<div>Enter the name of the person you wish to smite!</div>)
    return (
      <div className="fnagun col-md-6">
        <h3>FN A Gun</h3>
        <div className="boldMe">Directed Energy Weapon</div>
        {formTitle}
        <form className="input-group my-3" onSubmit={this.handleSubmit}>
          <fieldset className="mx-auto">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text px-2 py-1">Name:</span>
              </div>
              <input type="text" name="nameinput" placeholder="Smitee" value={this.state.smitee_name} onChange={this.handleNameChange} />
              <input className="btn btn-success" type="submit" value="Smite" disabled={this.state.smitee_name.length<2} />
            </div>
          </fieldset>
        </form>
        <div className="small">component state: {this.state.overall}</div>
      </div>
    )
  }
}

export default FNAGun;