import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import ContactView from "../contactView";
import PriceListView from "../priceView";
import LoyalityView from "../loyalityView";
import UserDetailsView from "../logged/userDetailsView.js";
import HistoryView from "../logged/historyView.js";
import ReservationView from "../logged/reservationView.js";
import MainView from "../main.js";


class WorkerView extends Component {
  handleLogout = () => window.location.assign("http://localhost:3000/");

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
                <li className="nav-item">
                  <Link to={"/user/contact"} className="nav-link">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link to={"/user/user-details"} className="nav-link">
                    Szczegóły konta
                  </Link>
                </li>
                <li>
                  <Link to={"/user/service-history"} className="nav-link">
                    Historia tankowania
                  </Link>
                </li>
                <li>
                  <Link to={"/user/reservation-view"} className="nav-link">
                    Rezerwacja
                  </Link>
                </li>
                <li>
                  <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handleLogout}>
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
            {/* <Route path="/user/invoices" component={InvoicesView} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default WorkerView;
