import React from "react";

class workingSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.info.name,
      phones: [],
      addressLink: this.props.info.addressLink,
      zone: this.props.info.zone,
      mail: this.props.info.mail,
      lastTimeUpdated: this.props.info.lastTimeUpdated,
      lastPersonUpdated: this.props.info.lastPersonUpdated,
      rooms: [],
      notes: this.props.info.notes,
      connections: [],
      facebookLink: this.props.info.facebookLink,
      timing: this.props.info.timing,

      fillArrays: this.fillArrays.bind(this)
    };

    this.fillArrays(props);
  }

  fillArrays = props => {
    this.setState(prevState => {
      phones: prevState.phones.concat(this.props.info.phone);
    });
    this.setState(prevState => {
      rooms: prevState.rooms.concat(this.props.info.room);
    });
    this.setState(prevState => {
      connections: prevState.connections.concat(this.props.info.connection);
    });
  };
  render() {
    return (
      <React.Fragment>
        <label>{this.state.name}</label>
        <label>{this.state.phones}</label>
        <label>{this.state.addressLink}</label>
        <label>{this.state.zone}</label>
        <label>{this.state.mail}</label>
        <label>{this.state.lastTimeUpdated}</label>
        <label>{this.state.lastPersonUpdated}</label>
        <label>{this.state.rooms}</label>
        <label>{this.state.notes}</label>
        <label>{this.state.connections}</label>
        <label>{this.state.facebookLink}</label>
        <label>{this.state.timing}</label>
      </React.Fragment>
    );
  }
}

class CoworkingSpace extends React.Component {
  constructor() {
    super();
    this.state = {
      availableSpaces: [],
      info: {
        name: "",
        phone: [],
        addressLink: "",
        zone: "",
        mail: "",
        lastTimeUpdated: "",
        lastPersonUpdated: ""
      },
      phone: [],

      prevent: this.prevent.bind(this),
      addCoworking: this.addCoworking.bind(this)
    };
  }
  prevent = e => {
    e.preventDefault();
  };
  addCoworking = () => {};

  render() {
    return (
      <React.Fragment>
        {this.state.availableSpaces.length > 0 ? (
          <div>
            <h1>Available Coworking Spaces</h1>
            {this.state.availableSpaces}
          </div>
        ) : (
          <h1>No availableSpaces</h1>
        )}
        <div>
          <h3>Add Coworking space</h3>
          <form onSubmit={this.prevent}>
            <input id="coName" type="text" />
            <input type="text" id="coPhones" />
            <button onClick={this.addPhone}>+</button>
            <input type="text" id="coAddressLink" />
            <input type="text" id="coZone" />
            <input type="text" id="coMail" />
            <input type="text" id="coLastTime" />
            <input type="text" id="coPerson" />
            <input type="text" id="coRooms" />
            <input type="text" id="coNotes" />
            <input type="text" id="coConnections" />
            <input type="text" id="coFacebook" />
            <input type="text" id="coTiming" />
            <button onClick={this.addCoworking}>Add</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default CoworkingSpace;
