import React, { Component } from "react";
import "../../styles/worker/reportsView.css";

class alarmsView extends Component {
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

            <div>
                <h2>Alarmy</h2>

                <div>
                    {sensors.map(function(item, key){
                        if(item.liters <= 100)
                            return (
                                <h3>Uwaga! Poziom paliwa w zbiorniku z {item.fuelType} jest poniżej 100 litrów</h3>
                            )
                        if(item.pressure >= 60)
                            return (
                                <h3>Uwaga! Ciśnienie w zbiorniku z {item.fuelType} jest powyżej 2 barów</h3>
                            )
                        if(item.temperature >= 60)
                            return (
                                <h3>Uwaga! Temperatura w zbiorniku z {item.fuelType} jest powyżej 60 stopni</h3>
                            )
                    })}
                </div>
            </div>
        )
    }
}

export default alarmsView;
