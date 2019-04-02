import React, { Component } from "react";
import "../../styles/logged/userView.css";

class userView extends Component {
  constructor() {
    super();
    this.state = {
      prices: []
    };
  }



  componentDidMount() {
    fetch('http://localhost:8080/users?callback=foo')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({ prices: data});
    })
    .catch(error => console.log(error));
  }

  render() {
    const { prices } = this.state;
    return (
      <div className="userView">
        <h3>Dane użytkownika</h3>
           {prices.map(function(item, key) {

               return (
                  <table key = {key}>

                      <tr><td>Imię: &nbsp;&nbsp;</td><td>{item.firstName}</td></tr>
                      <tr><td>Nazwisko: &nbsp;&nbsp;</td><td>{item.lastName}</td></tr>
                      <tr><td>Miasto: &nbsp;&nbsp;</td><td>{item.city}</td></tr>
                      <tr><td>Kod pocztowy: &nbsp;&nbsp;</td><td>{item.postalCode}</td></tr>
                      <tr><td>Adres e-mail: &nbsp;&nbsp;</td><td>{item.email}</td></tr>
                  </table>

                )

            })}
      </div>
    );
  }
}

export default userView;
