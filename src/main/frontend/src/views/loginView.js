import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/loginView.css";

class loginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            id: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginToUser = id =>
        window.location.assign("http://localhost:3000/user?id=" + id);

    handleLoginToWorker = id =>
        window.location.assign("http://localhost:3000/worker?id=" + id);

    handleLoginToOwner = id =>
        window.location.assign("http://localhost:3000/owner?id=" + id);

    handleSubmit(event) {
        fetch(
            "http://localhost:8080/auth/user?email=" +
            this.state.login +
            "&password=" +
            this.state.password
        )
            .then(response => {
                if (response.status !== 200) {
                    alert("error");
                } else {
                    return response.json();
                }
            })
            .then(data => {
                if (data.accessRights === "USER") {
                    this.handleLoginToUser(data.id);
                    return data;
                } else if (data.accessRights === "OWNER") {
                    this.handleLoginToOwner(data.id);
                    return data;
                } else if (
                    data.accessRights === "SHOP_ASSISTANT" ||
                    data.accessRights === "SECURITY_EMPLOYEE"
                ) {
                    this.handleLoginToWorker(data.id);
                    return data;
                }
            })
            .catch(error => console.log(error));

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
            <div className="jumbotron vertical-center">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label>
                                    <p>Podaj login:</p>
                                    <input
                                        type="text"
                                        value={this.state.login}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="col">
                                <label>
                                    <p>Podaj hasło:</p>
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleChangePassword}
                                    />
                                </label>
                            </div>
                        </div>
                        <br/>
                        <input className="btn btn-primary btn-lg btn-block" type="submit"
                               value="Wyślij"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default loginView;
