import React, { Fragment, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../../reducers/index";
import Videos from "./videos";
import Header from "../components/header";
import Home from "../components/home";
import Contacto from "../components/contacto";
import Perfil from "../components/perfil";
import NotFound from "../components/not-found";

const logger_ = ({ getState, dispatch }) => (next) => (action) => {
  console.log("este es mi viejo estado", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("este es mi nuevo estado", getState().toJS());
  return value;
};

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Redirect from="/v" to="/videos" />
            <Route exact path="/contacto" component={Contacto} />
            {/* <Route exact path="/perfil" component={Perfil} /> */}
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
