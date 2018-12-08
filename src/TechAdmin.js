import User from "./User";

class TechAdmin extends User {
  constructor() {
    super();
  }
  render() {
    return <User />;
  }
}

export default TechAdmin;
