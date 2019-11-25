import React, {useState} from 'react';
import './css/Profile.css';
import img from './img/bg.jpg';
import Random from './Random';
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





const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sideNav, setNav] = useState(false);
  const [isLoggedOut, setLogout] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const logout = () => { 
    setLogout(!isLoggedOut);
  // setcookies to null
  }

  const bgGround = {
    backgroundImage: 'url(' + img + ')',
    height:'900px',
  };

  function openNav() {
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


  if (isLoggedOut) { return <Redirect to="/" /> }


  return (
    
    <div style={bgGround} >
    <div id = "main">
    <Navbar color="warning" light expand="md" >
        <NavbarBrand >GatorDater</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Some Option#1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Some Option#2</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         Welcome, Seafoodghost &nbsp;&nbsp;&nbsp;
         <Button  variant="warning" onClick = {openNav}> &#9776;</Button>
         
        </Collapse>
      </Navbar>
      </div>
     

      <Switch>
        <Route path ="/" component = {Random}/>        
      </Switch> 

      <div id="mySidenav" className="sidenav"> 
        <ListGroup>
          <ListGroupItem>Update Profile</ListGroupItem>
          <ListGroupItem>Contact.1-800-800-8000</ListGroupItem>
          <ListGroupItem>Email: Some content@sfsu.edu</ListGroupItem>
          <ListGroupItem>Some content</ListGroupItem>
          <ListGroupItem>Some content</ListGroupItem>
          <Button  bsSize = "sm" variant="warning" onClick = {logout}> LogOut</Button>
        </ListGroup>         
     </div>
    </div>
 
  );
};

export default Profile;