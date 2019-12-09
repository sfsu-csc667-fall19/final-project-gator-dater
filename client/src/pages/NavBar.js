// nav bar for Home.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import { mdiFlowerTulipOutline } from '@mdi/js';

// css
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
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles(); // for the css

  return (
    <div className={classes.grow}> 
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          {/* For the rotating icon and Gator Dater title */}
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
                        <Icon path={mdiFlowerTulipOutline}
                        title="Nav Bar Icon"
                        size={1}
                        horizontal
                        vertical
                        rotate={90}
                        color="red"
                        spin/>
                        Gator Dater
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

//export default NavBar;