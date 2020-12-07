import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Navbar from './components/header/Navbar';
import Main from './pages/index';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <GlobalStyles />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
