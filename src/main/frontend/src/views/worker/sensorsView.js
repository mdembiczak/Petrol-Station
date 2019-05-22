import React, { Component } from 'react';
import "../../styles/worker/sensorsView.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class SensorsView extends Component {
  constructor() {
    super();
    this.state = {
      sensors: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/fuel-container?callback=foo')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({ sensors: data});
        })
        .catch(error => console.log(error));
  }

render() {
    const { sensors } = this.state;
    return (


            <div className="container">
              <br /><br /><br />
              <div className="row align-items-start">

                <h2>Zbiorniki :</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Zbiornik nr.</th>
                      <th scope="col">Typ paliwa</th>
                      <th scope="col">Litry paliwa</th>
                      <th scope="col">Temperatura</th>
                      <th scope="col">Ciśnienie</th>
                    </tr>
                  </thead>
                  <tbody>
                  {sensors.map(function(item, key){
                      return (
                            <tr key={key}>
                              <td>{item.containerNr}</td>
                              <td>{item.fuelType}</td>
                              <td>{item.liters}</td>
                              <td>{item.temperature}</td>
                              <td>{item.pressure}</td>
                            </tr>
                      )
                  })}
                  </tbody>
                </table>
              </div>
            </div>
    )
  }
}

export default SensorsView;