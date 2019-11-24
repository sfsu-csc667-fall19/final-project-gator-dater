import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route}  from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home';

const App = () => {
 
  
  return (
        <Switch>
          <Route exact path ="/login" component = {Profile}/>
          <Route exact path ="/" component = {Home}/>
        </Switch>
  );
}
export default App;
