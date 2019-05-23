import React, { Component } from "react";
import "../../styles/logged/userDetailsView.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import fetch from "isomorphic-fetch";

class reservationView extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            userDetails: props.location.state.user,
            reservations:[],
            date:           '',
            numbers:    '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        var res = {
            supply: "Myjnia",
            date: this.state.date,
            numberOfPlaces:this.state.numbers,
            userId:this.state.userDetails.id
        }

        fetch('http://localhost:8080/reservation/setReservation', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(res)
        }).then(obj => console.log(obj))
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }
    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
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
      const {date, numbers} = this.state;
      const { reservations } = this.state;
    return (
      <div>
        <h2>Rezerwacja myjni</h2>
          <form onSubmit={this.handleSubmit}>
          <table className="table">

          <thead className="thead-dark">
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Ilość stanowisk</th>
              <th scope="col">Rezerwacja</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="date" name="date" value={date} onChange={this.handleChange} required />
              </th>
              <td>
                  <input type="number" name="numbers" value={numbers} onChange={this.handleChange} required/>
              </td>
              <td>
                  <input className="btn btn-primary" type="submit" value="Wyślij" />
              </td>
            </tr>
          </tbody>
        </table>
          </form>
        <br />
        <br />
        <br />
        <h2>Historia rezerwacji</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Usługa</th>
              <th scope="col">Data</th>
              <th scope="col">Ilość stanowisk</th>
            </tr>
          </thead>
            <tbody>


            {reservations.map(function(item, key) {

                return (

                    <tr key={key}>
                        <th scope="row">{item.supply}</th>
                        <td>{item.date}</td>
                        <td>{item.numberOfPlaces}</td>
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
