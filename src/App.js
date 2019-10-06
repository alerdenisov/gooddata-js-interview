import React, { Component } from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { loginMachinery } from "./utils";
import * as gooddata from './gooddata';
import '@gooddata/react-components/styles/css/main.css';

import GrossProfit from './pages/GrossProfit.js';

import './App.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// const GrossProfit = React.lazy(() => import('./pages/GrossProfit.js'));

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false
    }
  } 

  componentDidMount() {
    loginMachinery({ ...gooddata }, () => this.setState({ authenticated: true }))
  }

  render() {
    const { authenticated } = this.state
    if (!authenticated) {
      return <div>Checking your credentials, please wait…</div>
    }

    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route path="/" name="GrossProfit" render={props => <GrossProfit {...props} {...gooddata}/>} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}