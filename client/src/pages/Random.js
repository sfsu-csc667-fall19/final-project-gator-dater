import React, { useState }from 'react';
import './css/Random.css';
import { Button} from 'react-bootstrap';
import { Card, Row, Col, CardSubtitle, CardHeader, CardFooter, CardImg, CardBody,CardTitle, CardText } from 'reactstrap';
import { Container, Label, Fade, ButtonToolbar, Form, FormGroup, Input, Alert, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

const Random = () => {
  const [message,setMessage] = useState(false);

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
                <Label >To RandomUser#1</Label> <hr/>     
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

const UserInfo = () =>{
    return (
      <div>
         <ListGroup>
      <ListGroupItem active>
        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
        <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
        <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
        <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
      </div>
    )

}





  return (
    <div id="con">
     
      <Row>
      <h4>RandomUser.js</h4><br/>
      </Row>
      <Row>
      <p>Welcome to the home page of the note app!</p>
      <p> Let's meet some new friends today.</p>
      </Row>

      <Row>    
      <Col id="user">
      <Card >
        <CardBody>
          <CardTitle>RandomUser#1 &nbsp;&nbsp;&nbsp;
          </CardTitle>
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
      <Row>    
      <Col id="user">
      <Card >
        <CardBody>
          <CardTitle>RandomUser#1 &nbsp;&nbsp;&nbsp;
          </CardTitle>
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
      <Row>    
      <Col id="user">
      <Card >
        <CardBody>
          <CardTitle>RandomUser#1 &nbsp;&nbsp;&nbsp;
          </CardTitle>
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
    </div>
  );
};

export default Random;