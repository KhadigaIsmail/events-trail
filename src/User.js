import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userInfo.name,
      mobile: this.props.userInfo.mobile,
      email: this.props.userInfo.email,
      address: this.props.userInfo.address,
      type: this.props.userInfo.type,

      show: this.show.bind(this),
      saveChanges: this.saveChanges.bind(this),
      prevent: this.prevent.bind(this)
    };
  }

  prevent = e => {
    e.preventDefault();
  };

  show = e => {
    //document.getElementById(e.target.id + "form").style.display = "block";
    e.target.nextSibling.nextSibling.style.display = "block";
  };

  saveChanges = e => {
    const newValue = e.target.previousSibling.value; //ely kataboh f-el input
    const clickedButtonId = e.target.id;

    // ktb 7aga
    if (newValue) {
      if (clickedButtonId === "userName") {
        this.setState({
          userName: newValue
        });
      } else if (clickedButtonId === "mobile") {
        this.setState({
          mobile: newValue
        });
      } else if (clickedButtonId === "address") {
        this.setState({
          address: newValue
        });
      } else if (clickedButtonId === "email") {
        this.setState({
          email: newValue
        });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <label style={{ margin: 10 + "px" }}>{this.state.userName}</label>
        <button onClick={this.show}>Change Name</button>
        <br />

        <form onSubmit={this.prevent} style={{ display: "none" }}>
          <input placeholder="Name" type="text" />
          <button id="userName" onClick={this.saveChanges}>
            Save Changes
          </button>
          <br />
        </form>

        <label style={{ margin: 10 + "px" }}>{this.state.mobile}</label>
        <button onClick={this.show}>Change Mobile</button>
        <br />

        <form onSubmit={this.prevent} style={{ display: "none" }}>
          <input placeholder="Mobile" type="text" />
          <button id="mobile" onClick={this.saveChanges}>
            Save Changes
          </button>
          <br />
        </form>

        <label style={{ margin: 10 + "px" }}>{this.state.email}</label>
        <button onClick={this.show}>Change Email</button>
        <br />

        <form onSubmit={this.prevent} style={{ display: "none" }}>
          <input placeholder="Email" type="email" />
          <button id="email" onClick={this.saveChanges}>
            Save Changes
          </button>
          <br />
        </form>

        <label style={{ margin: 10 + "px" }}>{this.state.address}</label>
        <button onClick={this.show}>Change Address</button>
        <br />

        <form onSubmit={this.prevent} style={{ display: "none" }}>
          <input placeholder="Address" type="text" />
          <button id="address" onClick={this.saveChanges}>
            Save Changes
          </button>
          <br />
        </form>

        <label style={{ margin: 10 + "px" }}>{this.state.type}</label>
      </React.Fragment>
    );
  }
}
export default User;
