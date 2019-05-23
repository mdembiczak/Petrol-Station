import React, {Component} from "react";
import "../../styles/registerView.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import fetch from "isomorphic-fetch";

class loyalityPrize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prizeName: "",
            points: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = {
            prizeName: this.state.prize,
            points: this.state.points
        };

        fetch("http://localhost:8080/loyality-prizes", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(obj => console.log(obj))
            .then(response => console.log("Success:", JSON.stringify(response)))
            .catch(error => console.error("Error:", error));

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {prize, points} = this.state;
        return (
            <div className="jumbotron vertical-center">
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label>
                                    <p>Nazwa nagrody:</p>
                                    <input
                                        type="text"
                                        name="prize"
                                        value={prize}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="col">
                                <label>
                                    <p>Wymagana ilość punktów:</p>
                                    <input
                                        type="text"
                                        name="points"
                                        value={points}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <br/>
                    <div className="submit">
                        <input className="btn btn-primary" type="submit" value="Wyślij"
                               onSubmit={this.handleSubmit}/>
                    </div>
            </div>

    </form>
    </div>
    )
        ;
    }
}

export default loyalityPrize;
