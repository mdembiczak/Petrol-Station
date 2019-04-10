import React, { Component } from "react";
import "../../styles/logged/historyView.css";

class refundLoyalityPointsView extends Component {
    constructor() {
        super();
        this.state = {
            loyalityFunds: []
        };
    }



    componentDidMount() {
        fetch('http://localhost:8080/service?callback=foo')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ prices: data});
            })
            .catch(error => console.log(error));
    }

    render() {
        const { loyalityFunds } = this.state;
        return (
            <div>
                <h2>Wymiana punktów lojalnościowych</h2>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nazwa</th>
                        <th scope="col">Ilość potrzebnych punktów</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Pralka</th><td>1000pkt</td>
                    </tr>
                    <tr>
                        <th scope="row">Zmywarka</th><td>2000pkt</td>
                    </tr>
                    <tr>
                        <th scope="row">Myszka komputerowa</th><td>300pkt</td>
                    </tr>
                    </tbody>
                </table>
            </div>
    );
    }
}

export default refundLoyalityPointsView;
