import React, { Component } from "react";
import "../../styles/worker/raportsView.css";

class raportsView extends Component {
  constructor() {
    super();
  }


  render() {
    return (
         <div>
          <h2>Raporty</h2>
          Podaj datę początkową: &nbsp;
          <input type="date"></input><br />
          Podaj datę końcową: &nbsp;
          <input type="date"></input><br />
          <button>Wyświetl</button><br />&nbsp;
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Lp.</th>
                  <th scope="col">Data</th>
                  <th scope="col">Cena</th>
                  <th scope="col">Usługa</th>
                  <th scope="col">Pracownik</th>
                  <th scope="col">Klient</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>01.01.2019</td>
                  <td>122,21zł</td>
                  <td>Tankowanie</td>
                  <td>Janusz Łuczak</td>
                  <td>Wincenty Ramos</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>02.01.2019</td>
                  <td>50,01zł</td>
                  <td>Tankowanie</td>
                  <td>Janusz Łuczak</td>
                  <td>Ryszard Kmieć</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>02.01.2019</td>
                  <td>320,20zł</td>
                  <td>Tankowanie</td>
                  <td>Janusz Łuczak</td>
                  <td>Sylwester Stallone</td>
                </tr>
              </tbody>
            </table>
        </div>
    );
  }
}

export default raportsView;
