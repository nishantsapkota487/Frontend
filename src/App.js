import React from 'react';
import './App.css';
import Homepage from './pages/homepageRegister';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path = '/' exact component = {Homepage} />
      </Switch>
    </Router>
    </div>
  );
}
export default App;
