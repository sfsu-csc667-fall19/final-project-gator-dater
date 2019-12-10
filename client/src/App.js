import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch ,Route , Redirect, Link} from "react-router-dom";
import Profile from './pages/Profile';
import Update from './pages/Update';
import Home from './pages/Home';
import history from './pages/history';
import Cookies from 'js-cookie';
import AddUserInfo from './pages/AddUserInfo';
import Upload from './pages/Upload';


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
          {/* Temporarily changing PrivateRoute to a regular Route to work on it */}
          <Route exact path ="/upload" component = {Upload}/>
          <Route exact path ="/adduserinfo" component = {AddUserInfo}/>
          <Route exact path ="/profile" component = {Profile}/>
          <Route exact path ="/" component = {Home}/>
          {/* Added this temporarily so I can work on it. Should be a PrivateRouter */}
          <Route exact path ="/update" component = {Update}/>
        </Switch>
    </Router>
  );
}
export default App;
