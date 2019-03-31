import React, { Component } from "react";
import "../styles/priceView.css";

class priceView extends Component {
  constructor() {
    super();
    this.state = {
      prices: []
    };
  }



  componentDidMount() {
    fetch('http://localhost:8080/prices?callback=foo')
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
        <h3>Cennik</h3>
            <table>
            <tr><td className="priceView_c11">Usługa</td><td className="priceView_c12">Cena</td></tr>
           {prices.map(function(item, key) {

               return (

                  <tr key = {key}>
                      <td>{item.fuelType}</td><td>{item.price}</td>
                  </tr>

                )

            })}
            </table>
      </div>
    );
  }
}

export default priceView;
