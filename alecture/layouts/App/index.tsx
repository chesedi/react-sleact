import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

// code splitting
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspaace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace" component={Workspaace} />
    </Switch>
  );
};

export default App;
