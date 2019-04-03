import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ContactView from "../contactView";
import PriceListView from "../priceView";
import LoyalityView from "../loyalityView";
import UserDetailsView from "../logged/userDetailsView.js";
import HistoryView from "../logged/historyView.js";
import MainView from "../main.js";

class OwnerView extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/user"} className="navbar-brand">
              Stacja Benzynowa
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Home
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
                <li>
                  <Link to={"/user-details"} className="nav-link">
                    Szczegóły konta
                  </Link>
                </li>
                <li>
                  <Link to={"service-history"} className="nav-link">
                    Historia tankowania
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Wyloguj
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/" component={MainView}/>
            <Route path="/price-list" component={PriceListView} />
            <Route path="/loyality" component={LoyalityView} />
            <Route path="/contact" component={ContactView} />
            <Route path="/user-details" component={UserDetailsView} />
            <Route path="/service-history" component={HistoryView} />
            <Route path="/user" component={HistoryView} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default OwnerView;
