import React, { useState }from 'react';
import './css/Random.css';
import { Button} from 'react-bootstrap';
import { Card, Row, Col, CardSubtitle, CardBody,CardTitle} from 'reactstrap';
import { Label, Form, FormGroup, Input, Alert, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import {connect} from 'react-redux';

const Random = ({dispatch, username, password, age, email, major, addtion, firstName, lastName, preference, listed, identity}) => {
  const [messageBox, setMessageBox] = useState(false);



  const openMessage = () =>{
    setMessageBox(!messageBox);
  }


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
      <h4>This is Random.js</h4><br/>
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
          <CardSubtitle>Hello, I am {username}.Let's meet some new friends today.
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
  preference: state.userReducer.preference
});

export default connect(mapStateToProps)(Random);