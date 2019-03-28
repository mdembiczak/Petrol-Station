import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/registerView.css';

class registerView extends Component {
    constructor(props){
        super(props);
        this.state = {
                        password:           '',
                        confirmPassword:    '',
                        firstName:          '',
                        lastName:           '',
                        email:              '',
                        city:               '',
                        postalcode:         ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
             alert('A name was submitted: ' + this.state.email + ", " + this.state.password);
             event.preventDefault();
         }
         handleChange(event) {
             this.setState({[event.target.name] : event.target.value});
          }
         handleChangePassword(event) {
             this.setState({[event.target.name] : event.target.value});
         }

  render() {
    return (
      <div className="registerView">
        <div className="registerView-header">
            <form onSubmit={this.handleSubmit}>

            <div className="leftSide">
              <label>
                    <p>Podaj adres e-mail:</p>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /></label><br/>
                <label>
                    <p>Podaj hasło:</p>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChangePassword} /></label><br/>
                <label>
                    <p>Potwierdź hasło:</p>
                    <input type="password"  name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChangePassword} /></label><br/>
              </div>

            <div className="rightSide">
                <label>
                    <p>Podaj imię:</p>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} /></label><br/>
                <label>
                    <p>Podaj nazwisko:</p>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} /></label><br/>
                <label>
                    <p>Podaj miasto:</p>
                    <input type="text" name="city" value={this.state.city} onChange={this.handleChange} /></label><br/>
                <label>
                    <p>Podaj kod pocztowy</p>
                    <input type="text"  name="postalcode" value={this.state.postalcode} onChange={this.handleChange} /></label><br/>
            </div>

            <div className="submit">
                <input type="submit" value="Wyślij" />
            </div>

            </form>
        </div>
      </div>
    );
  }
}

export default registerView;
