import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <Footer />
      </React.Fragment>
    );
  }
}
export default Profile;
