import React from 'react';
import NavBar from './NavBar';
import img2 from './img/Snowglobe1.jpg';
import Jedi from './img/Jedi.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: 20,
    marginLeft: 20,
  },
  media: {
    height: 140,
  },
});

const styles = {
  card: {
    padding: 20,
  }
}

// for the background.
const bgGround = {
  backgroundImage: 'url(' + img2 + ')',
};

export default function MediaCard() {
  const classes = useStyles();

  // handling to toggle heart appearance
  const [heart, setHeart] = React.useState('default');
  const updateHeart = () => {
    if(heart==='default') {
      setHeart('secondary');
    } else {
      setHeart('default');
    }
  };
  
  // toggling for heart?
  /*
  const [isToggled, setIsToggled] = React.useState(false);
  if(isToggled) {
    setHeart('default');
  } else {
    setHeart('secondary');
  }
*/
  return (
    <Grid container>
      {/* To get background */}
      <div style={bgGround} id="bg">
        {/* References NavBar */}
        <NavBar />
        {/* Card #1 */}
        <Grid item sm>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Jedi}
                title="Friendly doge"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jedi, 12
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Jedi loves going out for long walks and sniffing absolutely everything.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Fab active aria-label="like" color={heart} onClick={() => setHeart(updateHeart)}>
                <FavoriteIcon />
              </Fab>
              <Fab active aria-label="like" style={{marginLeft: 20}}>
                <CancelRoundedIcon />
              </Fab>
            </CardActions>
          </Card>
        </Grid>
        {/* Card #2 */}
        <Grid item sm>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Jedi}
                title="Friendly doge"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jedi, 12
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Jedi loves going out for long walks and sniffing absolutely everything.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Fab active aria-label="like">
                <FavoriteIcon />
              </Fab>
              <Fab active aria-label="like" style={{marginLeft: 20}}>
                <CancelRoundedIcon />
              </Fab>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </Grid>
  );
}

//export default Profile;