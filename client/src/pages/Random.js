import React, { useState } from 'react';
import './css/Random.css';
import { Button } from 'react-bootstrap';
import { Card, Label, Row, Col, CardSubtitle, CardBody, CardTitle } from 'reactstrap';
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
import { connect } from 'react-redux';
import Modal from './Modal';
import axios from 'axios';

const Random = ({ dispatch, username, password, age, email, major, addtion, firstName, lastName, preference, listed, identity, activeUsers }) => {
  const [messageBox, setMessageBox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // temporary states/handlers for the card info.
  const [cardFirstName, setCardFirstName] = useState('First Name');
  const [cardPronoun, setCardPronoun] = useState('Pronoun')
  // const [cardLastName, setCardLastName] = useState('Last Name');
  const [cardAge, setCardAge] = useState('Age');
  const [cardGender, setCardGender] = useState('Gender');
  const [cardCollegeYear, setCardCollegeYear] = useState('College Year');
  const [cardEmail, setCardEmail] = useState('mail@sfsu.edu');
  const [cardInfo, setCardInfo] = useState('This is temporary use Info.This is temporary use Info.This is temporary use Info.This is temporary use Info.');
  const [cardUsername, setCardUsername] = useState('MASTER')
  const [users, setUser] = useState([]);
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const openMessage = () => {
    setMessageBox(!messageBox);
  }

  // card css style imports for Raymond
  const useStyles = makeStyles({
    card: {
      maxWidth: 700,
      marginTop: 20,
      marginLeft: 20,
    },
    media: {
      height: 500,
    },
  });

  const styles = {
    card: {
      padding: 20,
    }
  }

  const listUsers = () => {
    axios.post('/user/listUsers', { preference })
    .then((res) => {
        console.log("calling")
        // Filter method removes self if it is there
        setUser(res.data.filter(el => el.username !== username));
      })
  }

  function shuffleUsers(arr) {
    let currentIndex = arr.length, tempVal, randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1

      tempVal = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }

    return arr;
  }

  React.useEffect(listUsers, [])

  const clickX = () => {
    try {
      setHeart('default');

      let query = users[Math.floor(Math.random() * users.length)].username;

      axios.post('/user/check', {
        userA: username,
        userB: query,
      }).then((res) => { if (res.data) { setHeart('secondary'); } })

      axios.post('/user/returnUser', { username: query })
        .then((res) => {
          setCardUsername(res.data.username);
          setCardAge(res.data.age);
          setCardFirstName(res.data.firstName);
          setCardGender(res.data.gender);
          setCardPronoun(res.data.pronoun);
          setCardCollegeYear(res.data.collegeYear);
          setCardInfo(res.data.info);
          setCardEmail(res.data.email);

        }).catch(console.log("NOTHING FOUND"));
    }
    catch (e) { console.log(e) }
  }

  // styles for the card- Raymond
  //export default function MediaCard() {
  const classes = useStyles();

  // handling to toggle heart appearance/color (when the heart is clicked)
  const [heart, setHeart] = React.useState('default');
  const updateHeart = () => {
    if (heart === 'default') {
      axios.post('/user/like', {
        userA: username,
        userB: cardUsername,
      }).then((res) => {
        if (res.data === 'Success') { setHeart('secondary'); }
      });
    } else {
      axios.post('/user/unlike', {
        userA: username,
        userB: cardUsername,
      }).then((res) => { console.log(res.data); })
    }

    axios.post('/user/mutual', {
      userA: username,
      userB: cardUsername,
    }).then((res) => { if (res.data) { toggleModal(); } })
  };

  return (
    <div>
      {/* <Row> */}
      {/* <h4>This is RandomUser.js   &nbsp;&nbsp;&nbsp; active users: {activeUsers}</h4><br/> */}
      {/* {listUsers()} */}
      <Label className="ud">Active gators: {activeUsers}</Label><br />
      <Grid container spacing={24} justify="center">
        {/* Card #1 */}
        <Grid item sm={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`http://localhost/user/profilePic/${cardUsername}`}

              title="Friendly doge"
            />
            <CardContent> {/* This is where the user info is displayed */}
              <Typography gutterBottom variant="h5" component="h2">
                {cardFirstName}, {cardAge}
              </Typography>
              <Typography variant="body" color="textSecondary" component="p">
                {cardGender}, {cardPronoun}, {cardCollegeYear}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {cardInfo}
              </Typography>
            </CardContent>
            <CardActions> {/* Handler example for changing heart color */}
              {/* This is the heart button */}
              <Fab active aria-label="like" color={heart} onClick={() => setHeart(updateHeart)}>
                <FavoriteIcon />
              </Fab>
              <Modal
                show={showModal}
                closeCallback={toggleModal}
                customClass="custom_modal_class"
              >
                <React.Fragment>
                  <h2>It's A Match!</h2>

                  {cardEmail}

                </React.Fragment>
              </Modal>
              {/* This is the X button */}
              {/* onClick={() => setX(updateX)} ... is an example of setting an onClick for the X */}
              <Fab active aria-label="like" style={{ marginLeft: 20 }} onClick={clickX}>
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