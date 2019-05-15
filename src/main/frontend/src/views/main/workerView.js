import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import querystring from "query-string";

import ContactView from "../contactView";
import PriceListView from "../priceView";
import LoyalityView from "../loyalityView";
import UserDetailsView from "../worker/allUsersView.js";
import ReportsView from "../worker/reportsView.js";
import MainView from "../main.js";
import SensorsView from "../worker/sensorsView.js";
import CamerasView from "../worker/camerasView";

class WorkerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worker: null,
      mode: null
    };
  }

  componentDidMount() {
    const parsed = querystring.parse(this.props.location.search);
    console.log(parsed);
    fetch("http://localhost:8080/worker?id=" + parsed.id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ worker: data, mode: data.accessRights});
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/worker/main-page"} className="navbar-brand">
              Stacja Benzynowa
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/worker/price-list"} className="nav-link">
                    Cennik
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/worker/loyality"} className="nav-link">
                    Program lojalnościowy
                  </Link>
                </li>

                <li>
                  <Link to={"/worker/user-details"} className="nav-link">
                    Podgląd danych klienta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/worker/contact"} className="nav-link">
                    Kontakt
                  </Link>
                </li>

                <li>{this.renderAdditionalButton()}</li>
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
            <Route path="/worker/main-page" component={MainView} />
            <Route path="/worker/price-list" component={PriceListView} />
            <Route path="/worker/loyality" component={LoyalityView} />
            <Route path="/worker/contact" component={ContactView} />
            <Route path="/worker/user-details" component={UserDetailsView} />
            <Route path="/worker/reports-view" component={ReportsView} />
            <Route path="/worker/sensors" component={SensorsView} />
            <Route path="/worker/cameras" component={CamerasView} />
          </Switch>
        </div>
      </Router>
    );
  }

  handleLogout = () => window.location.assign("http://localhost:3000/");

  renderAdditionalButton() {
    if (this.state.mode == "SHOP_ASSISTANT") {
      return (
        <NavDropdown title="Administracja" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to={"/worker/recipe"} className="nav-link">
              Paragon
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/worker/invoice"} className="nav-link">
              Faktury
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/worker/reports-view"} className="nav-link">
              Raporty
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown title="Administracja" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to={"/worker/sensors"} className="nav-link">
              Czujniki
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/worker/alarms"} className="nav-link">
              Alarmy
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/worker/cameras"} className="nav-link">
              Kamery
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/worker/reports-view"} className="nav-link">
              Raporty
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
      );
    }
  }
}

export default WorkerView;
