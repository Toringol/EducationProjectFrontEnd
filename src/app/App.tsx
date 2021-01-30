import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MainPage, LogInPage, SignUpPage } from 'pages';

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
}
