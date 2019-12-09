import React, {useState}from 'react';
import { connect } from 'react-redux';
// importing update redux
import { updateProfile, setAge, setEmail, setGender, setCollegeYear, setMajor, setAddtion } from '../redux/actions/updateActions';
import { setIsUpdateOpen } from '../redux/actions/pageAction';
import { Button} from 'react-bootstrap';
import './css/Update.css';
import { Row, Col, Label, Form, FormGroup, Input, Alert} from 'reactstrap';

// replaced const/their handlers with the redux states.
const Update = ({dispatch, isUpdateOpen, age, email, gender, collegeYear, major, addtion, interests}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /*
  const [age, setAge] = useState('');  
  const [email, setEmail] = useState('');  
  const [collegeyear, setCollegeYear] = useState(''); 
  const [major, setMajor] = useState('');  
  const [addtion, setAddtion] = useState('');  
  */
  const [success, setSuccess] = useState('');


  const [errormessage, setErrorMessage] = useState('');

  const closeUpdate =()=>{
    dispatch(setIsUpdateOpen(false));
  }



  return (
    <div id="frame">
                <Alert color="black" id="con" > 
                    <h4> Update User Information</h4><br />
                    <h5>{errormessage}</h5><br />
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Username</Label>
                                    <Input bsSize="sm" value={username} onChange={e => setUsername(e.target.value)} id="username" placeholder="username" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Password</Label>
                                    <Input bsSize="sm" type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="password" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={3}>
                                <FormGroup>
                                    <Label >Age</Label>
                                    <Input bsSize="sm" value={age} onChange={e => setAge(e.target.value)} placeholder="age" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Email</Label>
                                    <Input bsSize="sm" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@mail.sfsu.edu" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="exampleAddress">College Year</Label>
                            <Input type="select" bsSize="sm" value={collegeYear} onChange={e => setCollegeYear(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Freshman">Freshman</option>
                                    <option value="Sophomore">Sophomore</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Senior">Senior</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">Major</Label>
                            <Input type="text" value={major} onChange={e => setMajor(e.target.value)} placeholder="what is your major?" />
                        </FormGroup>
                        {/* The gender needs to be accounted for in the backend? as well as handled for when onchange */}
                        <Row form>
                            <Col md={3}>
                                <FormGroup check>
                                    <Input type="checkbox" id="male" />
                                    <Label check>Female</Label>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Input type="checkbox" id="male" />
                                    <Label check>Male</Label>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Input type="checkbox" id="male" />
                                    <Label check>Other</Label>
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="exampleText">We want to know more about you.</Label>
                            <Input type="textarea" name="text" id="exampleText" value={addtion} onChange={e => setAddtion(e.target.value)} placeholder="preference, interest, anything you want to share..." />
                        </FormGroup>

                        <br />
                        <Row form>
                            <Col md={6}>
                                {/* dispatching update redux. WIP */}
                                <Button variant="warning" onClick={() => dispatch(updateProfile())} block>Submit</Button>
                            </Col>
                            <Col md={6}>
                                <Button  variant="warning" onClick ={closeUpdate} block>Not Now</Button>
                            </Col>
                        </Row>
                    </Form>
                    <h5>{success}</h5>
                </Alert>
            </div>
  );
};
// interests is commented out because dont think its needed actually. Addtion is the additional info.
const mapStateToProps = state => ({
    username: state.userReducer.username,
    password: state.userReducer.password,
    isUpdateOpen: state.pageReducer.isUpdateOpen,
    age: state.updateReducer.age,
    email: state.updateReducer.email,
    gender: state.updateReducer.gender,
    collegeYear: state.updateReducer.collegeYear,
    major: state.updateReducer.major,
    addtion: state.updateReducer.addtion,
    // interests: state.updateReducer.interests,
 });

export default connect(mapStateToProps)(Update);