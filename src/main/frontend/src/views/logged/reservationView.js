import React, { Component } from "react";

class reservationView extends Component {

  render() {
    return (
      <div>
        <h2>Rezerwacja myjni</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Godzina</th>
              <th scope="col">Ilość stanowisk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="date" />
              </th>
              <td>
                <input type="time" />
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>
          </tbody>
        </table>
        <button>Rezerwuj!</button>
        <br />
        <br />
        <br />
        <h2>Historia rezerwacji</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Godzina</th>
              <th scope="col">Ilość stanowisk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01.01.2019r</th>
              <td>12:20</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default reservationView;
