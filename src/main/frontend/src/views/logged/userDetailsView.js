import React, { Component } from "react";
import "../../styles/logged/userDetailsView.css";

class UserDetailsView extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      userDetails: props.location.state.user
    };
  }


  render() {
    return (
      <div className="userView">
        <h3>Dane użytkownika</h3>
                  <table className="table">

                      <thead className="thead-dark"><tr><th scope="col">Imię: &nbsp;&nbsp;</th><th scope="col">{this.state.userDetails.firstName}</th></tr></thead>
                      <tbody>
                      <tr><th scope="row">Nazwisko: &nbsp;&nbsp;</th><td>{this.state.userDetails.lastName}</td></tr>
                      <tr><th scope="row">Miasto: &nbsp;&nbsp;</th><td>{this.state.userDetails.city}</td></tr>
                      <tr><th scope="row">Kod pocztowy: &nbsp;&nbsp;</th><td>{this.state.userDetails.postalCode}</td></tr>
                      <tr><th scope="row">Adres e-mail: &nbsp;&nbsp;</th><td>{this.state.userDetails.email}</td></tr>
                      </tbody>
                  </table>
      </div>
    );
  }
}

export default UserDetailsView;
