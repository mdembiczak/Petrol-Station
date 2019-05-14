import React, { Component } from "react";
import "../../styles/worker/reportsView.css";
import fetch from "isomorphic-fetch";

class ReportsView extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      one: '',
      two: '',
      myjnia: 0,
      LPG: 0,
      ON: 0,
      PB95: 0,
      PB98: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:8080/service/getReport?one='+this.state.one+'&two='+this.state.two, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({ services: data});
        })
        .catch(error => console.error('Error:', error));
  }
  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }


  render() {
    const {services} =this.state;
    const {one, two}= this.state;
    var myjnia = this.state.myjnia;
    var LPG = this.state.LPG;
    var ON = this.state.ON;
    var PB95 = this.state.PB95;
    var PB98 = this.state.PB98;

    console.log(this.state.ON);

    return (
         <div>
          <h2>Raporty</h2>

           <form onSubmit={this.handleSubmit}>

          <input type="date" name="one" value={one} onChange={this.handleChange} required /><br />

          <input type="date" name="two" value={two} onChange={this.handleChange} required/><br />

          <input type="submit" value="Wyślij!"/><br />


           </form>

            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Lp.</th>
                  <th scope="col">Klient</th>
                  <th scope="col">Cena</th>
                  <th scope="col">Usługa</th>
                </tr>
              </thead>
              <tbody>
              {services.map(function(item, key) {
                  if(item.serviceType=="Myjnia") {
                      myjnia += item.price;
                  }
                  if(item.serviceType=="ON") {
                      ON += item.price;
                  }
                  if(item.serviceType=="LPG")
                      LPG+=item.price;
                  if(item.serviceType=="PB95")
                      PB95+=item.price;
                  if(item.serviceType=="PB98")
                      PB98+=item.price;

                return (

                    <tr key = {key}>
                      <th scope="row">{item.id}</th><td>{item.name}</td><td>{item.price}</td><td>{item.serviceType}</td>
                    </tr>

                )


              })}
              </tbody>
            </table>

             <table  className="table">
                 <thead className="thead-dark">
                 <tr>
                     <th scope="col">Usługa</th>
                     <th scope="col">Cena sumaryczna</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                     <td>Myjnia</td><td>{myjnia}</td>
                 </tr>

                 <tr>
                     <td>ON</td><td>{ON}</td>
                 </tr>

                 <tr>
                     <td>LPG</td><td>{LPG}</td>
                 </tr>

                 <tr>
                     <td>PB95</td><td>{PB95}</td>
                 </tr>

                 <tr>
                     <td>PB98</td><td>{PB98}</td>
                 </tr>

                 </tbody>

             </table>
        </div>
    );
  }
}

export default ReportsView;
