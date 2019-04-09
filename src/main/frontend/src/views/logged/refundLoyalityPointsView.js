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
            </div>
    );
    }
}

export default refundLoyalityPointsView;
