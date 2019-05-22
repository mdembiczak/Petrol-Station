import React, { Component } from "react";
import "../../styles/registerView.css";
import fetch from "isomorphic-fetch";

class loyalityPrize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prizeName: "",
      points: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      prizeName: this.state.prize,
      points: this.state.points
    };

    fetch("http://localhost:8080/loyality-prizes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(obj => console.log(obj))
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));

      event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { prize, points } = this.state;
    return (
      <div className="registerView">
        <div className="registerView-header">
          <form onSubmit={this.handleSubmit}>
            <div className="leftSide">
              <label>
                <p>Nazwa nagrody:</p>
                <input
                  type="text"
                  name="prize"
                  value={prize}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <br />
              <label>
                <p>Wymagana ilość punktów:</p>
                <input
                  type="text"
                  name="points"
                  value={points}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <br />
            </div>
            <div className="submit">
              <input type="submit" value="Wyślij"
              onSubmit={this.handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default loyalityPrize;
