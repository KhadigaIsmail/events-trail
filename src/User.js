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
    e.target.nextSibling.style.dispaly = "block";
    console.log(e.target.nextSibling.className);
  };

  saveChanges = e => {
    const newValue = e.target.prevSibling.value; //el input ely ktb fih
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
        <label>{this.state.userName}</label>
        <button onClick={this.show}>Change Name</button>
        <br />

        <form className="c" onSubmit={this.prevent} style={{ display: "none" }}>
          <input placeholder="Name" />
          <button id="userName" onClick={this.saveChanges}>
            Save Changes
          </button>
          <br />
        </form>

        <label>{this.state.mobile}</label>
        <button onClick={this.show}>Change Mobile</button>
        <br />

        <form onSubmit={this.prevent} style={{ display: "none" }}>
          <input placeholder="Mobile" />
          <button id="mobile" onClick={this.saveChanges}>
            Save Changes
          </button>
          <br />
        </form>

        <label>{this.state.email}</label>
        <button onClick={this.show}>Change Email</button>
        <br />

        <form onSubmit={this.prevent} style={{ display: "none" }}>
          <input placeholder="Email" />
          <button id="email" onClick={this.saveChanges}>
            Save Changes
          </button>
          <br />
        </form>

        <label>{this.state.address}</label>
        <button onClick={this.show}>Change Address</button>
        <br />

        <form onSubmit={this.prevent} style={{ display: "none" }}>
          <input placeholder="Address" />
          <button id="address" onClick={this.saveChanges}>
            Save Changes
          </button>
          <br />
        </form>

        <label>{this.state.type}</label>
        <button type="submit">Edit Profile</button>
      </React.Fragment>
    );
  }
}
export default User;
