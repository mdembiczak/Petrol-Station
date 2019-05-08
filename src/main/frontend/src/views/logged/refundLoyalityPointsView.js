import React, { Component } from "react";
import "../../styles/logged/historyView.css";
import '../../styles/centerText.css';

class refundLoyalityPointsView extends Component {
    constructor() {
        super();
        this.state = {
            prizes: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/loyality-prizes?callback=foo')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ prizes: data});
            })
            .catch(error => console.log(error));
    }

    render() {
        const { prizes } = this.state;
        return (
            <div>
                <h3>Nagrody programu lojalnościowego</h3>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nagroda</th>
                        <th scope="col">Wymagana liczba punktów</th>
                        <th scope="col">Wymień!</th>
                    </tr>
                    </thead>
                    <tbody>


                    {prizes.map(function(item, key) {

                        return (

                            <tr key={key}>
                                <th scope="row">{item.prizeName}</th>
                                <td>{item.points}</td>
                                <td><button>Wymień!</button></td>
                            </tr>
                        )

                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default refundLoyalityPointsView;
