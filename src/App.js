import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Page Components
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import PrivacyPolicy from './pages/privacy-policy';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
    </Switch>
  );
}

export default App;
