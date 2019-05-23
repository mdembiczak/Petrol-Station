import React, { Component } from "react";
import "../../styles/worker/reportsView.css";

class invoiceView extends Component {
    constructor() {
        super();
        this.state = {
            services: [{name:"", price:""}],
            Nazwa: "",
            NIP: "",
            Data: "",
            Ulica:"",
            KodPocztowy:"",
            Miejscowosc:""
        }
        this.handleThing = this.handleThing.bind(this);
        this.handleChangeData = this.handleChangeData.bind(this);
    }

    handleChange = (e) => {
        if (["name", "price"].includes(e.target.className) ) {
            let services = [...this.state.services]
            services[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
            this.setState({ cats: services }, () => console.log(this.state.services))
        } else {
            this.setState({ [e.target.name]: e.target.value})
        }
    }
    addService = (e) => {
        this.setState((prevState) => ({
            services: [...prevState.services,{name: "", price: ""}],
        }));
    }
    handleSubmit = (e) => { e.preventDefault() }

    handleThing(){
        console.log(this.state.services);
    }

    handleChangeData(event){
        this.setState({[event.target.name] : event.target.value});
    }


    render() {
        let {Nazwa, NIP, Data, services,KodPocztowy,Ulica,Miejscowosc} = this.state;
        return (
        <div className="form-group">
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <label htmlFor="Nazwa">Nazwa firmy</label>
                <input className="form-control" type="text" name="Nazwa" id="Nazwa" value={Nazwa} onChange={this.handleChangeData} /><br/>
                <label htmlFor="NIP">NIP</label>
                <input className="form-control" type="text" name="NIP" id="NIP" value={NIP} onChange={this.handleChangeData} /><br/>
                <label htmlFor="Data">Data</label>
                <input className="form-control" type="date" name="Data" id="Data" value={Data} onChange={this.handleChangeData}/><br/>
                <label htmlFor="Ulica">Ulica</label>
                <input className="form-control" type="text" name="Ulica" id="Ulica" value={Ulica} onChange={this.handleChangeData}/><br/>
                <label htmlFor="KodPocztowy">KodPocztowy</label>
                <input className="form-control" type="text" name="KodPocztowy" id="KodPocztowy" value={KodPocztowy} onChange={this.handleChangeData}/><br/>
                <label htmlFor="Miejscowosc">Miejscowosc</label>
                <input className="form-control" type="text" name="Miejscowosc" id="Miejscowosc" value={Miejscowosc} onChange={this.handleChangeData}/><br/>

                <button class="btn btn-primary" onClick={this.addService}>Add new service</button>
                {
                    services.map((val, idx)=> {
                        let serviceId = `name-${idx}`, priceId = `price-${idx}`
                        return (
                            <div key={idx} className="form-group" >
                                <br />
                                <label htmlFor={serviceId}>{`Usługa #${idx + 1}`}</label>
                                &nbsp;&nbsp;
                                <input
                                    type="text"
                                    name={serviceId}
                                    data-id={idx}
                                    id={serviceId}
                                    value={services[idx].name}
                                    className="name"
                                />&nbsp;&nbsp;&nbsp;&nbsp;
                                <label htmlFor={priceId}>Cena:</label>
                                &nbsp;&nbsp;
                                <input
                                    type="text"
                                    name={priceId}
                                    data-id={idx}
                                    id={priceId}
                                    value={services[idx].price}
                                    className="price"
                                />
                            </div>
                        );
                    })
                }
                <br /><br />
            </form>

            <div >
                <h3>Faktura</h3>
                <div className="container">
                    <div className="row">
                        <div className="col">Nazwa firmy:&nbsp;&nbsp;{this.state.Nazwa}</div>
                        <br /><br />
                        <div className="col"> NIP:&nbsp;&nbsp;{this.state.NIP}</div>
                        <br /><br />
                        <div className="w-100"></div>
                        <div className="col">Data:&nbsp;&nbsp;{this.state.Data}</div>
                        <br /><br />
                        <div className="col">Kod Pocztowy:&nbsp;&nbsp;{this.state.KodPocztowy} </div>
                        <br /><br />
                        <div className="w-100"></div>
                        <div className="col">Miejscowość:&nbsp;&nbsp;{this.state.Miejscowosc}</div>
                        <br /><br />
                        <div className="col">Ulica:&nbsp;&nbsp;{this.state.Ulica}  </div>
                        <br /><br />
                    </div>
                </div>

                <table className="table">
                    <thead >
                    <tr>
                        <th scope="col">Usługa</th>
                        <th scope="col">Cena</th>
                    </tr>
                    </thead>
                    <tbody>


                    {services.map(function(item, key) {

                        return (

                            <tr key={key}>
                                <th scope="row">{item.name}</th>
                                <td>{item.price}</td>
                            </tr>
                        )

                    })}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}
export default invoiceView;
