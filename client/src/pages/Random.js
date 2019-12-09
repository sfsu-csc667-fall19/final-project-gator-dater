import React, { useState }from 'react';
import './css/Random.css';
import { Button} from 'react-bootstrap';
import { Card, Row, Col, CardSubtitle, CardBody,CardTitle} from 'reactstrap';
import { Label, Form, FormGroup, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';

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

const Random = () => {
  const [messageBox, setMessageBox] = useState(false);

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

  // handling to toggle heart appearance/color
  const [heart, setHeart] = React.useState('default');
  const updateHeart = () => {
    if(heart==='default') {
      setHeart('secondary');
    } else {
      setHeart('default');
    }
  };

  const Message = ()=>{      
    return (
        <div>       
         
            <Alert color = "light" isOpen={messageBox} id="messageBox">           
            <Form>
                <FormGroup>
                <Label>To RandomUser#1</Label> <hr/>     
                    <Input type="textarea" bsSize="sm" placeholder="Send a massage..." rows="11" cols="50"/>
                </FormGroup> 
               
            <Row form>
                <Col md={6}>
                <Button  block>Submit</Button>
                </Col>
                <Col md={6}>
                <Button  onClick = {openMessage} block>Not Now</Button>
                </Col>
            </Row>
            </Form>      
            </Alert> 
    </div>
    )
  }

  return (
    <div id="con">
     
      <Row>
      {/* <h4>This is RandomUser.js   &nbsp;&nbsp;&nbsp; active users: {activeUsers}</h4><br/> */}
     
      </Row>
      <Row>
      <p> Below are users randomly seclected form the database.</p><br/>
      <p> Let's meet some new friends today.</p>
      </Row>

      <Row>    
      <Col id="user">
      <Card >
        <CardBody>
          <CardTitle>RandomUser#1 &nbsp;&nbsp;&nbsp;
          </CardTitle><hr/>
          <CardSubtitle>Hello, I am Seafoodghost.Let's meet some new friends today.
          Let's meet some new friends today.</CardSubtitle><br/>
          <div>
          <Button onClick = {openMessage}>Send Message</Button>
          <Button id ="ab"> &#9776;</Button>
          </div>
        </CardBody>
      </Card>
      </Col>
      {messageBox && (  
                <div >{Message()}</div> 
            )}     
      </Row>
      
      
      <Grid container>
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
              <CardActions> {/* Handler example for changing heart color */}
                <Fab active aria-label="like" color={heart} onClick={() => setHeart(updateHeart)}>
                  <FavoriteIcon />
                </Fab>
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
  activeUsers: state.userReducer.activeUsers,
});

export default connect(mapStateToProps)(Random);