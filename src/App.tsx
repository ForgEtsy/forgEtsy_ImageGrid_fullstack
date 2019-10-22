import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router } from "react-router-dom";
import BelowMainContent from "./components/BelowMainContent/BelowMainContent";

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => {
  return (
    <Router history={history}>
      <Route
        path="/:productId"
        render={(routeProps) => {
          return <BelowMainContent {...routeProps} />;
        }}
      />
    </Router>
  );
};

export default App;
