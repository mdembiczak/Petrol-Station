import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import querystring from "query-string";

import ContactView from "../contactView";
import PriceListView from "../priceView";
import LoyalityView from "../loyalityView";
import UserDetailsView from "../logged/userDetailsView.js";
import HistoryView from "../logged/historyView.js";
import ReservationView from "../logged/reservationView.js";
import RefundLoyalityPointsView from "../logged/refundLoyalityPointsView";
import MainView from "../main.js";

class WorkerView extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  handleLogout = () => window.location.assign("http://localhost:3000/");

  componentDidMount() {
    const parsed = querystring.parse(this.props.location.search);
    console.log(parsed);
    fetch("http://localhost:8080/users?id=" + parsed.id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ user: data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/user/main-page"} className="navbar-brand">
              Stacja Benzynowa
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/user/main-page"} className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/user/price-list"} className="nav-link">
                    Cennik
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/user/loyality"} className="nav-link">
                    Program lojalnościowy
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/user/refundLoyalityPointsView",
                      state: { user: this.state.user }
                    }}
                    className="nav-link"
                  >
                    Wymiana punktów lojalnościowych
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: "/user/user-details",
                      state: { user: this.state.user }
                    }}
                    className="nav-link"
                  >
                    Szczegóły konta
                  </Link>
                </li>
                <li>
                  <Link to={{
                    pathname: "/user/service-history",
                    state: { user: this.state.user }
                  }} className="nav-link">
                    Historia tankowania
                  </Link>
                </li>
                <li>
                    <Link
                        to={{
                          pathname: "/user/reservation-view",
                          state: { user: this.state.user }
                        }}
                        className="nav-link"
                    >
                    Rezerwacja
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/user/contact"} className="nav-link">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    onClick={this.handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/user/main-page" component={MainView} />
            <Route path="/user/price-list" component={PriceListView} />
            <Route path="/user/loyality" component={LoyalityView} />
            <Route path="/user/contact" component={ContactView} />
            <Route path="/user/user-details" component={UserDetailsView} />
            <Route path="/user/service-history" component={HistoryView} />
            <Route path="/user/reservation-view" component={ReservationView} />
            <Route
              path="/user/refundLoyalityPointsView"
              component={RefundLoyalityPointsView}
            />
            {/* <Route path="/user/invoices" component={InvoicesView} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default WorkerView;
