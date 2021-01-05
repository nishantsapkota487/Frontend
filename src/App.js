import React from 'react';
import './App.css';
import Homepage from './pages/homepageRegister';
import LoginPage from './pages/homepageLogin';
import PostsPage from './pages/postsPage';
import MyPost from './pages/myPosts';
import Error from './pages/Error404';
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
        <Route path = '/myposts' exact component = { MyPost } />
        <Route path = '*' exact component = { Error } />
      </Switch>
    </Router>
    </div>
  );
}
export default App;
