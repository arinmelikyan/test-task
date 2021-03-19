import React from 'react';
import {Router, Switch, Route, Redirect} from "react-router";
import { createBrowserHistory } from 'history';
import NavBar from './components/Navbar';
import AlbumsPage from './pages/AlbumsPage';
import PostsPage from './pages/PostsPage';
import CommentsPage from './pages/CommentsPage';
import PhotosPage from './pages/PhotosPage';

import './App.css';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
                return <Redirect to="/posts" />
            }}
          />
          <Route path="/posts" component={PostsPage} />
          <Route path="/albums" component={AlbumsPage} />
          <Route path="/comments/:postId" component={CommentsPage} />
          <Route path="/photos/:albumId" component={PhotosPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
