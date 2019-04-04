import React, { Component } from 'react';
import "../../styles/logged/sensorsView.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class SensorsView extends Component {
render() {
    return (
      <div class="container">
         <div class="row align-items-start">
          <h2>Poziom paliwa:</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Dystrybutor</th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">E95</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">E98</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">ON</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
        </div>
        <br/>
        <div class="row align-items-center">
             <h2>Ciśnienie i temperatura:</h2>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Dystrybutor</th>
                      <th scope="col">1</th>
                      <th scope="col">2</th>
                      <th scope="col">3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Ciśnienie na lustrem cieczy</th>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">Temp. w zbiorniku</th>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
        </div>

        <br/>
                <div class="row align-items-end">
                     <h2>LPG:</h2>
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">LPG</th>
                              <th scope="col">Poziom LPG</th>
                              <th scope="col">Temperatura</th>
                              <th scope="col">Ciśnienie par</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Czujniki:</th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                </div>
      </div>
    );
  }
}

export default SensorsView;