import React, { Component } from "react";
import "../../styles/logged/userDetailsView.css";

class reservationView extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            userDetails: props.location.state.user,
            reservations:[]
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/reservation/getReservations?userId='+this.state.userDetails.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ reservations: data});
            })
            .catch(error => console.log(error));
    }

  render() {
    const { reservations } = this.state;
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


            {reservations.map(function(item, key) {

                return (

                    <tr key={key}>
                        <th scope="row">{item.supply}</th>
                        <td>{item.date}</td>
                    </tr>
                )

            })}
            </tbody>
        </table>
      </div>
    );
  }
}

export default reservationView;
