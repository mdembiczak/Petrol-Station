import React, { Component } from "react";
import "../../styles/logged/historyView.css";
import '../../styles/centerText.css';
import fetch from "isomorphic-fetch";

class refundLoyalityPointsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prizes:[],
            userDetails: props.location.state.user,
            prize:'',
            points:0,
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
        console.log(this.state.userDetails);
        const mail = this.state.userDetails.email;


        return (


            <div>
                <h3>Nagrody programu lojalnościowego</h3>
                <h4>Ilość punktów: {this.state.userDetails.amountPoints}</h4>
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
                        function handlePoints(){
                            fetch('http://localhost:8080/users/updatePoints?mail='+mail+'&amount='+item.points, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                }
                            }).then(obj => console.log(obj))
                                .then(response => console.log('Success:', JSON.stringify(response)))
                                .catch(error => console.error('Error:', error));
                        }

                        return (

                            <tr key={key}>
                                <th scope="row">{item.prizeName}</th>
                                <td>{item.points}</td>
                                <td><button onClick={handlePoints}>Wymień!</button></td>
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
