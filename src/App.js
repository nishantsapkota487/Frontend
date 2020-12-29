import React from 'react';
import './App.css';
import Homepage from './pages/homepageRegister';
import LoginPage from './pages/homepageLogin';
import PostsPage from './pages/postsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path = '/' exact component = { Homepage } />
        <Route path ='/login' exact component = { LoginPage } />
        <Route path = '/register' exact component = { Homepage } />
        <Route path = '/posts' exact component = { PostsPage }  />
      </Switch>
    </Router>
    </div>
  );
}
export default App;
