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

  console.log('PROFILE USER: ' + username);

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
  isUpdateOpen: state.pageReducer.isUpdateOpen, //??

  username: state.userReducer.username,
  password: state.userReducer.password,
  age: state.userReducer.age,
  email: state.userReducer.email,
  firstName: state.userReducer.firstName,
  lastName: state.userReducer.lastName,
  info: state.userReducer.info,
  listed: state.userReducer.listed,
  gender: state.userReducer.gender,
  pronoun: state.userReducer.pronoun,
  preference: state.userReducer.preference,
  collegeYear: state.userReducer.collegeYear,
});

export default connect(mapStateToProps)(Profile);