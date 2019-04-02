import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PriceListView from './views/priceView';
import RegisterView from'./views/registerView';
import GuestView from './views/main/guestView';
import UserView from './views/main/userView';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={GuestView} />
            <Route path='/user' component={UserView} />
            <Route path='/worker' component={PriceListView} />
            <Route path='/owner'  component={RegisterView} />
          </Switch>
        <div className="footer">

            Copyright © 2019 Bigos i przyjaciele Sp. z o.o.

        </div>
      </Router>
    );
  }
}

export default App;
