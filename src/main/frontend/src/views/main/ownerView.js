import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import ContactView from "../contactView";
import PriceListView from "../priceView";
import LoyalityView from "../loyalityView";
import UserDetailsView from "../logged/userDetailsView.js";
import HistoryView from "../logged/historyView.js";
import MainView from "../main.js";
import SensorsView from "../worker/sensorsView";
import InvoiceView from "../worker/invoiceView";
import AlarmsView from "../worker/alarmsView";
import CamerasView from "../worker/camerasView";
import ReceipeView from "../worker/receipeView";
import ContainerView from "../owner/containerView";

class OwnerView extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/owner/main-page"} className="navbar-brand">
              Stacja Benzynowa
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/owner/price-list"} className="nav-link">
                    Cennik
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/owner/loyality"} className="nav-link">
                    Program lojalnościowy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/owner/contact"} className="nav-link">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link to={"/owner/user-details"} className="nav-link">
                    Szczegóły konta
                  </Link>
                </li>
                <li>
                  <NavDropdown title="Administracja" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to={"/owner/sensors"} className="nav-link">
                        Czujniki
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={"/owner/alarms"} className="nav-link">
                        Alarmy
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={"/owner/cameras"} className="nav-link">
                        Kamery
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <Link to={"/owner/recipe"} className="nav-link">
                        Paragon
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <Link to={"/owner/invoice"} className="nav-link">
                        Faktury
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <Link to={"/owner/container"} className="nav-link">
                        Zbiornik
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
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
            <Route path="/owner/main-page" component={MainView} />
            <Route path="/owner/price-list" component={PriceListView} />
            <Route path="/owner/loyality" component={LoyalityView} />
            <Route path="/owner/contact" component={ContactView} />
            <Route path="/owner/user-details" component={UserDetailsView} />
            <Route path="/owner/sensors" component={SensorsView} />
            <Route path="/owner/alarms" component={AlarmsView} />
            <Route path="/owner/cameras" component={CamerasView} />
            <Route path="/owner/recipe" component={ReceipeView} />
            <Route path="/owner/invoice" component={InvoiceView} />
            <Route path="/owner/container" component={ContainerView} />


          </Switch>
        </div>
      </Router>
    );
  }

  handleLogout = () => window.location.assign("http://localhost:3000/");

}

export default OwnerView;
