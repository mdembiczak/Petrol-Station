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
      <div>
        <h3>Prices</h3>
           {this.state.prices.map(function(item, key) {

           return (
              <tr key = {key}>
                  <td>{item.fuelType}</td>
                  <td>{item.price}</td>
              </tr>
            )

         })}
      </div>
    );
  }
}

export default priceView;
