import React, { Component } from 'react';
import '../styles/loginView.css';

class loginView extends Component {
    constructor(props){
        super(props);
        this.state = {login: '',
                        password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.login + ", " + this.state.password);
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({login: event.target.value});
     }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

  render() {
    return (
      <div className="loginView">
        <header className="loginView-header">
            <form onSubmit={this.handleSubmit}>
            <label>
            <p>Podaj login:</p>
            <input type="text" value={this.state.login} onChange={this.handleChange} /></label><br/>
            <label>
            <p>Podaj hasło:</p>
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} /></label><br/>
            <input type="submit" value="Wyślij" />
            </form>
        </header>
      </div>
    );
  }
}

export default loginView;
