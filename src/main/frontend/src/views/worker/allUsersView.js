import React, { Component } from "react";
import "../../styles/worker/reportsView.css";

class allUsersView extends Component {
    constructor(){
      super();
        this.state = {
            users: [],
        };
    };

    componentDidMount() {
        fetch('http://localhost:8080/users/allUsers')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ users: data});
            })
            .catch(error => console.log(error));
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <h2>Dane klientów:</h2>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Imie</th>
                        <th scope="col">Nazwisko</th>
                        <th scope="col">Email</th>
                        <th scope="col">Miasto</th>
                        <th scope="col">Ilość Punktów</th>
                        <th scope="col">Dane dostępowe</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(function(item, key) {

                        return (

                            <tr key = {key}>
                                <th scope="row">{item.firstName}</th><td>{item.lastName}</td><td>{item.email}</td><td>{item.city}</td><td>{item.amountPoints}</td><td>{item.accessRights}</td>
                            </tr>

                        )

                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default allUsersView;
