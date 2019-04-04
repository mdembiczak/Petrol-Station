import React, { Component } from "react";
import "../../styles/worker/raportsView.css";

class raportsView extends Component {
  constructor() {
    super();
    this.state = {
      prices: []
    };
  }



  componentDidMount() {
    fetch('http://localhost:8080/supply?callback=foo')
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
      <div className="priceView">
        <h3>Raporty</h3>
            <table>
            <tr><td className="priceView_c11">Usługa</td><td className="priceView_c12">Cena</td></tr>
           {prices.map(function(item, key) {

               return (

                  <tr key = {key}>
                      <td>{item.date}</td><td>{item.worker}</td>
                  </tr>

                )

            })}
            </table>
      </div>
    );
  }
}

export default raportsView;
