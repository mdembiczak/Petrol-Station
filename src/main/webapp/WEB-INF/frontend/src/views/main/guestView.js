import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

import LoginView from "../loginView";
import ContactView from "../contactView";
import PriceListView from "../priceView";
import RegisterView from "../registerView";
import LoyalityView from "../loyalityView";
import MainView from "../main.js";

class GuestView extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={"/"} className="navbar-brand">
                            Stacja Benzynowa
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Logowanie
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        Rejestracja
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/price-list"} className="nav-link">
                                        Cennik
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/loyality"} className="nav-link">
                                        Program lojalnościowy
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/contact"} className="nav-link">
                                        Kontakt
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/login" component={LoginView} />
                        <Route exact path="/contact" component={ContactView} />
                        <Route path="/price-list" component={PriceListView} />
                        <Route path="/register" component={RegisterView} />
                        <Route path="/loyality" component={LoyalityView} />
                        <Route path="/" component={MainView} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default withRouter(GuestView);
