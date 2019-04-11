import React, { Component } from "react";
import "../../styles/worker/reportsView.css";

class invoiceView extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <h2>Faktury</h2>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Lp.</th>
                        <th scope="col">Data</th>
                        <th scope="col">Kwota</th>
                        <th scope="col">Klient</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>01.01.2019</td>
                        <td>122,21zł</td>
                        <td>Mariusz Kałamarz</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>02.01.2019</td>
                        <td>50,01zł</td>
                        <td>Kazimierz Wójcik</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>06.01.2019</td>
                        <td>320,20zł</td>
                        <td>Sylwester Stallone</td>
                    </tr>
                    </tbody>
                </table>
                <button>Nowa faktura</button>
            </div>
        );
    }
}

export default invoiceView;
