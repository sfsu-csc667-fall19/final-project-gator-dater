import React, { useState }from 'react';
import './css/Random.css';
import { Button} from 'react-bootstrap';
import { Card, Row, Col, CardSubtitle, CardBody,CardTitle} from 'reactstrap';
// Raymond's card imports
import Jedi from './img/Jedi.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Dont know why this isnt needed...maybe the reactstrap version of card is same
//import Card2 from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import Fab from '@material-ui/core/Fab';
import { Label, Form, FormGroup, Input, Alert, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import {connect} from 'react-redux';
import Modal from './Modal';
import NavBar from './NavBar';


const Random = ({dispatch, username, password, age, email, major, addtion, firstName, lastName, preference, listed, identity, activeUsers}) => {
  const [messageBox, setMessageBox] = useState(false);
  const [showModal, setShowModal] = useState(false);

  let users = [];

  const toggleModal = () => {
      setShowModal(!showModal);

  }

  const openMessage = () =>{
    setMessageBox(!messageBox);
  }

  // card css style imports for Raymond
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

  

  // styles for the card- Raymond
  //export default function MediaCard() {
  const classes = useStyles();

  // handling to toggle heart appearance/color (when the heart is clicked)
  const [heart, setHeart] = React.useState('default');
  const updateHeart = () => {
    if(heart==='default') {
      setHeart('secondary');
      toggleModal();
    } else {
      setHeart('default');
    }
  };

  // handling for when the X is clicked. Currently no functionality
  const [x, setX] = React.useState('');
  const updateX = () => {

  };
  // temporary states/handlers for the card info.
  const [cardFirstName, setCardFirstName] = useState('First Name');
  //const [cardLastName, setCardLastName] = useState('Last Name');
  const [cardAge, setCardAge] = useState('Age');
  const [cardGender, setCardGender] = useState('Gender');
  const [cardCollegeYear, setCardCollegeYear] = useState('College Year');
  const [cardInfo, setCardInfo] = useState('This is temporary use Info.This is temporary use Info.This is temporary use Info.This is temporary use Info.');

  return (
    <div>
      {/* <Row> */}
      {/* <h4>This is RandomUser.js   &nbsp;&nbsp;&nbsp; active users: {activeUsers}</h4><br/> */}

      <h4>This is Random.js &nbsp;&nbsp;&nbsp; active user: {activeUsers}</h4><br/>
    
      
      <Grid container spacing={24} justify="center">
          {/* Card #1 */}
          <Grid item sm={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Jedi}
                  title="Friendly doge"
                />
                <CardContent> {/* This is where the user info is displayed */}
                  <Typography gutterBottom variant="h5" component="h2">
                    {cardFirstName}, {cardAge}
                  </Typography>
                  <Typography variant="body" color="textSecondary" component="p">
                    {cardGender}, {cardCollegeYear}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {cardInfo}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> {/* Handler example for changing heart color */}
                {/* This is the heart button */}
                <Fab active aria-label="like" color={heart} onClick={() => setHeart(updateHeart)}>
                  <FavoriteIcon />
                </Fab> {/* This is the X button */}
        <Modal
          show={showModal}
          closeCallback={toggleModal}
          customClass="custom_modal_class"
        >
          <React.Fragment>
            <h2>It's A Match!</h2>
            <iframe src="https://giphy.com/embed/P8MxmGnjmytws" width="480" height="322" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happy-smile-P8MxmGnjmytws">via GIPHY</a></p>
                      </React.Fragment>
        </Modal>
                {/* onClick={() => setX(updateX)} ... is an example of setting an onClick for the X */}
                <Fab active aria-label="like" style={{marginLeft: 20}}>
                  <CancelRoundedIcon />
                </Fab>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

    </div>
  );
};
const mapStateToProps = state => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  age: state.userReducer.age,
  email: state.userReducer.email,
  major: state.userReducer.major,
  firstName: state.userReducer.firstName,
  lastName: state.userReducer.lastName,
  addtion: state.userReducer.addtion,
  listed: state.userReducer.listed,
  identity: state.userReducer.identity,
  preference: state.userReducer.preference,
  collegeYear: state.userReducer.collegeYear,
  activeUsers: state.userReducer.activeUsers,
});
export default connect(mapStateToProps)(Random);