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
        let {Nazwa, NIP, Data, services} = this.state;
        return (
        <div>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <label htmlFor="Nazwa">Nazwa</label>
                <input type="text" name="Nazwa" id="Nazwa" value={Nazwa} onChange={this.handleChangeData} /><br/>
                <label htmlFor="NIP">NIP</label>
                <input type="text" name="NIP" id="NIP" value={NIP} onChange={this.handleChangeData} /><br/>
                <label htmlFor="Data">Data</label>
                <input type="date" name="Data" id="Data" value={Data} onChange={this.handleChangeData}/><br/>
                <button onClick={this.addService}>Add new service</button>
                {
                    services.map((val, idx)=> {
                        let serviceId = `name-${idx}`, priceId = `price-${idx}`
                        return (
                            <div key={idx}>
                                <label htmlFor={serviceId}>{`Usługa #${idx + 1}`}</label>
                                <input
                                    type="text"
                                    name={serviceId}
                                    data-id={idx}
                                    id={serviceId}
                                    value={services[idx].name}
                                    className="name"
                                />
                                <label htmlFor={priceId}>Age</label>
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
                <input type="button" value="Submit" onClick={this.handleThing}/>
            </form>

            <div>
                <h3>Podsumowanie</h3> <br/>

                Nazwa Raportu:  {this.state.Nazwa}  <br/>
                NIP:            {this.state.NIP}    <br/>
                Data:           {this.state.Data}   <br/>

                <table className="table">
                    <thead className="thead">
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
