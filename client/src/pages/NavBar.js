// nav bar for Home.js
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Icon from '@mdi/react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { setIsLoggedIn, setUsername } from '../redux/actions/userActions';
import { Switch, Route, Redirect}  from "react-router-dom";
import Update from './Update';
import ico from './img/ICON.png';
import { setPassword, setAge, setEmail, setInfo,
         setCollegeYear, setFirstName, setLastName, setPreference,
         setPronoun, setGender, setListed }
         from '../redux/actions/userActions';


// css
const NavBar = ({ dispatch, username, isLoggedIn }) => {
  const [goEdit, setGoEdit] = useState(false);
  const icon = 'url(' + ico + ')';

  const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    rightToolbar: {
      marginLeft: 'auto',
      marginRight: -12,
    },
    menuButton: {
      marginRight: 16,
      marginLeft: -12,
    },
  }));

  const logout = () => {

    dispatch(setUsername(''))
    dispatch(setPassword(''))
    dispatch(setFirstName(''))
    dispatch(setLastName(''))
    dispatch(setAge(''))
    dispatch(setEmail(''))
    dispatch(setCollegeYear(''))
    dispatch(setPreference(''))
    dispatch(setPronoun(''))
    dispatch(setListed(''))
    dispatch(setInfo(''))
    dispatch(setGender(''))

    Cookies.remove('username')
    Cookies.remove('password')
    Cookies.remove('isLoggedIn')
    dispatch(setIsLoggedIn(false));
    // setcookies to null
  }

  const editProfile = () => {
    console.log('Edit Profile');
    setGoEdit(true);
  }

  const classes = useStyles(); // for the css
  if (!isLoggedIn) { return <Redirect to="/" /> }
  if (goEdit) {return <Redirect to="/update"/> }


  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          {/* For the rotating icon and Gator Dater title */}
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
            <Icon path={icon}
              title="Nav Bar Icon"
              size={1}
              horizontal
              vertical
              rotate={90}
              spin />
            gator.dater
            </Typography>
          {isLoggedIn && (
            <section className={classes.rightToolbar}>
              <IconButton color="inherit" aria-label="Edit" onClick={editProfile}>
                <EditIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="logout" onClick={logout}>
                <ExitToAppIcon />
              </IconButton>
            </section>
          )}

        </Toolbar>
      </AppBar>
    </div>
  );

}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,

});

export default connect(mapStateToProps)(NavBar);