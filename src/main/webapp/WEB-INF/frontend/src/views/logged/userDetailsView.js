import React, { Component } from "react";
import "../../styles/logged/userDetailsView.css";

class UserDetailsView extends Component {
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
                  <table key = {key} className="table">

                      <thead className="thead-dark"><tr><th scope="col">Imię: &nbsp;&nbsp;</th><th scope="col">{item.firstName}</th></tr></thead>
                      <tbody>
                      <tr><th scope="row">Nazwisko: &nbsp;&nbsp;</th><td>{item.lastName}</td></tr>
                      <tr><th scope="row">Miasto: &nbsp;&nbsp;</th><td>{item.city}</td></tr>
                      <tr><th scope="row">Kod pocztowy: &nbsp;&nbsp;</th><td>{item.postalCode}</td></tr>
                      <tr><th scope="row">Adres e-mail: &nbsp;&nbsp;</th><td>{item.email}</td></tr>
                      </tbody>
                  </table>

                )

            })}
      </div>
    );
  }
}

export default UserDetailsView;
