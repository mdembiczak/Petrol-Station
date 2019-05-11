import React, { Component } from "react";
import "../../styles/logged/historyView.css";

class HistoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      userDetails: props.location.state.user,
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/service/getUsersHistory?name='+this.state.userDetails.email)
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
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Usługa</th>
                          <th scope="col">Cena</th>
                          <th scope="col">Data</th>
                        </tr>
                      </thead>
                      <tbody>
           {prices.map(function(item, key) {

               return (

                  <tr key = {key}>
                      <th scope="row">{item.serviceType}</th><td>{item.price}</td><td>{item.date}</td>
                  </tr>

                )

            })}
            </tbody>
       </table>
      </div>
    );
  }
}

export default HistoryView;
