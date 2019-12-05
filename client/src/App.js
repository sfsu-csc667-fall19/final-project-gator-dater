import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch ,Route , Redirect, Link} from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home';
import history from './pages/history';
import Cookies from 'js-cookie'

const App = () => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      Cookies.get("isLoggedIn") == "true"
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
  
  return (
    <Router history = {history}>
        <Switch>
          <PrivateRoute exact path ="/profile" component = {Profile}/>
          <Route exact path ="/" component = {Home}/>
        </Switch>
    </Router>
  );
}
export default App;
