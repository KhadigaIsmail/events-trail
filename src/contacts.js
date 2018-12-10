class Contact {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      mobile: this.props.mobile,
      notes: this.props.notes
    };
  }
}
export default Contact;
