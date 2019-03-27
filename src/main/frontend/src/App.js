import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginView from './views/loginView';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Stacja Benzynowa</Link>
            <div className="collapse navbar-collapse" id="navbarSupportContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/login'} className="nav-link">Logowanie</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/price-list'} className="nav-link">Cennik</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/login' component={LoginView} />
            {/*<Route path='/price-list' component={PriceListView} />*/}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
