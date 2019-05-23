import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';



class registerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            postalcode: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        var data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city,
            postalcode: this.state.postalcode,
            email: this.state.email,
            password: this.state.password
        }

        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(obj => console.log(obj))
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {firstName, lastName, city, postalcode, email, password, confirmPassword} = this.state;
        return (
            <div className="jumbotron vertical-center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="container ">
                        <div className="row">
                            <div className="col">
                                <label>
                                    <p>Podaj adres e-mail:</p>
                                    <input type="email" name="email" value={email}
                                           onChange={this.handleChange} required/></label></div>
                            <div className="col">
                                <label>
                                    <p>Podaj hasło:</p>
                                    <input type="password" name="password" value={password}
                                           onChange={this.handleChangePassword}
                                           required/></label></div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>
                                <p>Podaj imię: </p>
                                <input type="text" name="firstName" value={firstName}
                                       onChange={this.handleChange} required/></label></div>
                            <div className="col">
                            <label>
                                <p>Potwierdź hasło:</p>
                                <input type="password" name="confirmPassword"
                                       value={confirmPassword} onChange={this.handleChangePassword}
                                       required/></label></div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>
                                <p>Podaj nazwisko:</p>
                                <input type="text" name="lastName" value={lastName}
                                       onChange={this.handleChange} required/></label></div>
                            <div className="col col-centered">
                            <label>
                                <p>Podaj miasto:</p>
                                <input type="text" name="city" value={city}
                                       onChange={this.handleChange} required/></label></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>
                                    <p>Podaj kod pocztowy</p>
                                    <input type="text" name="postalcode" value={postalcode}
                                           onChange={this.handleChange} required/></label>
                            </div>
                            <div className="col col-centered"></div>
                        </div>
                        </div><br/>
                        <input className="btn btn-primary btn-lg btn-block" type="submit"
                               value="Wyślij"/>

                    </form>


            </div>
        );
    }
}

export default registerView;
