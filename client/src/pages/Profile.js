import React, {useState} from 'react';
import { connect } from 'react-redux';
// import fb from './img/fb.jpg';
import { setIsUpdateOpen } from '../redux/actions/pageAction';
import './css/Profile.css';
//import img from './img/bg.jpg';
import img2 from './img/Snowglobe1.jpg';
import Random from './Random';
import Update from './Update';
import NavBar from './NavBar';
import Cookies from 'js-cookie'
import { Switch, Route, Redirect}  from "react-router-dom";
import { Button} from 'react-bootstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';





const Profile = ({dispatch, isUpdateOpen, username, password, age, email, major, addtion, firstName, lastName, preference, listed, identity}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sideNav, setNav] = useState(false);
  const [isLoggedOut, setLogout] = useState(false);
  const [isGoUpdate, setGoupdate] = useState(false);
  const [profileImg, setProfileImg] = useState('');

  const toggle = () => setIsOpen(!isOpen);
  const logout = () => { 
    setLogout(!isLoggedOut);
    dispatch(setIsUpdateOpen(false));
    Cookies.remove('username')
    Cookies.remove('password')
    Cookies.remove('isLoggedIn')
  // setcookies to null
  }

  const bgGround = {
    backgroundImage: 'url(' + img2 + ')',
    height:'850px',
  };

  const openNav = ()=> {
    if(sideNav){
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("main").style.marginRight = "0px";
      setNav(false);
    }
    else{
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginRight = "250px";
      setNav(true);
    }
  }

  const goUpdate = ()=>{
    dispatch(setIsUpdateOpen(!isUpdateOpen));
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginRight = "0px";
    setNav(false);

  }

  if (isLoggedOut) { return <Redirect to="/" /> }


  return (
    
    <div style={bgGround} >
    <div id = "main">
    <Route path = "/" component = {NavBar}/>    

        <Switch>
        {isUpdateOpen && ( 
          <Route path = "/" component ={Update}/> 
          
        )}
          <Route path = "/" component = {Random}/>   
        </Switch>

     </div> 
    </div>
  );
};
//}

const mapStateToProps = state => ({
   isUpdateOpen: state.pageReducer.isUpdateOpen,
   password: state.userReducer.password,
   age: state.userReducer.age,
   email: state.userReducer.email,
   major: state.userReducer.major,
   firstName: state.userReducer.firstName,
   lastName: state.userReducer.lastName,
   addtion: state.userReducer.addtion,
   preference: state.userReducer.preference,
   listed: state.userReducer.listed,
   identity: state.userReducer.identity,

});

export default connect(mapStateToProps)(Profile);