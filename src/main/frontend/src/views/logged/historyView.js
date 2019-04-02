import React, { Component } from "react";
import "../../styles/logged/historyView.css";

class HistoryView extends Component {
  constructor() {
    super();
    this.state = {
      prices: []
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
    const { prices } = this.state;
    return (
      <div className="historyView">
        <h3>Historia</h3>
            <table>
            <tr><td className="historyView_c11">Usługa</td><td className="historyView_c12">Cena</td></tr>
           {prices.map(function(item, key) {

               return (

                  <tr key = {key}>
                      <td>{item.serviceType}</td><td>{item.price}</td>
                  </tr>

                )

            })}
            </table>
      </div>
    );
  }
}

export default HistoryView;
