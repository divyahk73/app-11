import React from "react";
import InputBox from "./InputBox";
import InputOTP from "./InputOTP";
import GetLocation from "./GetLoation";
import CityDetails from "./CityDetails";
import Card from "./Card";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", isMatch: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log("submiting data");
    let num = "1234567890";
    if (num === this.state.value) {
      this.setState({ isMatch: true });
    } else {
      this.setState({ isMatch: false });
    }
    event.preventDefault();
  }

  render() {
    const isMatch = this.state.isMatch;
    return (
      <React.Fragment>
        <div>
          <h2>Customer Details</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              className="input col-12 mx-1"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" className="col-12 mx-1 mt-3" />
            <InputOTP />
            <div>
              {isMatch ? (
                <Card />
              ) : (
                <div>
                  <InputBox />
                  <GetLocation />
                  <CityDetails />
                </div>
              )}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
