import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react'
import { mdiFlowerTulipOutline } from '@mdi/js';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
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
    )
}

export default NavBar;