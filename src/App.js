import React from "react";
import { Provider } from "react-redux";
import { store, rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from "./components/layout/AppNavBar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <AppNavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/client/add" component={AddClient} />
              </Switch>
            </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
