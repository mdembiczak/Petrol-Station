import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import '../styles/priceView.css';

class loginView extends Component {
    constructor(props){
        super(props);
        this.values = {PB98: '4.61zł',
                        PB95: '4.40zł',
                        LPG: '1.99zł',
                        ON: '5.20zł',
                        Myjnia: '1.20zł'};

}
state = {
    values: []
}
componentDidMount(){
    axios.get('https://localhost:8080/prices')
        .then(res => {
            const values = res.data;
            this.setState({values});
        })
}

  render() {
    return (
      <div className="priceView">
        <header className="priceView-header">
                    { this.state.values.map(values=> <p>{values.fuelType}</p>)}
            <table>
                <tr><td className="table-td1">Usługa</td><td className="table-td1">Cena</td></tr>
                <tr><td className="table-td11">PB95</td><td>{this.values.PB95}</td></tr>
                <tr><td className="table-td11">PB98</td><td>{this.values.PB98}</td></tr>
                <tr><td className="table-td11">LPG</td><td>{this.values.LPG}</td></tr>
                <tr><td className="table-td11">ON</td><td>{this.values.ON}</td></tr>
                <tr><td className="table-td11">Myjnia</td><td>{this.values.Myjnia}</td></tr>
            </table>



        </header>
      </div>
    );
  }
}

export default loginView;
