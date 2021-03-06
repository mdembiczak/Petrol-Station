import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GuestView from './views/main/guestView';
import UserView from './views/main/userView';
import OwnerView from './views/main/ownerView';
import WorkerView from './views/main/workerView';


class App extends Component {
  render() {
    return (
        <div>
            <div>
              <Router>
                  <Switch>
                    <Route exact path='/' component={GuestView} />
                    <Route exact path='/user' component={UserView} />
                    <Route exact path='/worker' component={WorkerView} />
                    <Route exact path='/owner'  component={OwnerView} />
                  </Switch>
              </Router>
            </div>
            <footer className="page-footer font-small gray fixed-bottom">
                <div className="footer-copyright text-center py-3">
                    Copyright © 2019 Bigos i przyjaciele Sp. z o.o.
                </div>
            </footer>
        </div>
    );
  }
}

export default App;
