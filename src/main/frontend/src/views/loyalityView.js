import React, { Component } from 'react';
import '../styles/contactView.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            prizes: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/prizes?callback=foo')
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
                    </tr>
                    </thead>
                    <tbody>


                    {prizes.map(function(item, key) {

                        return (

                            <tr key={key}>
                                <th scope="row">{item.prizeName}</th>
                                <td>{item.points}</td>
                            </tr>
                        )

                    })}
                    </tbody>
                </table>
            </div>
        );
      }
}

export default App;