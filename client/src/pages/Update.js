import React, {useState}from 'react';
import { connect } from 'react-redux';
// importing update redux
import { updateProfile} from '../redux/actions/updateActions';
import { setIsUpdateOpen } from '../redux/actions/pageAction';
import { setUsername, setPassword, setAge, setEmail, setMajor, setInfo, setFirstName, setLastName, setPreference, setIdentity, setListed } from '../redux/actions/userActions';
import { Button} from 'react-bootstrap';
import './css/Update.css';
import { Row, Col, Label, Form, FormGroup, Input, Alert} from 'reactstrap';

const Update = ({dispatch, isUpdateOpen, username, password, age, email, major, info, firstName, lastName, preference, listed, identity}) => {
  const [collegeyear, setCollegeYear] = useState(''); 
  const [success, setSuccess] = useState('');
  const [profileImg, setProfileImg] = useState('');


  const [errormessage,setErrorMessage] = useState('');

  const closeUpdate =()=>{
    dispatch(setIsUpdateOpen(false));
  }



  return (
    <div id="frame">
                <Alert color="black" id="con" > 
                    <h4> Update User Information</h4><br />
                    <h5>{errormessage}</h5><br />
                    <Form>
                    <Row><Col>
                        <FormGroup>
                            <Label>You can upload your img here</Label>
                            <Input type="file" id="imgFile" onChange ={e => setProfileImg(e.target.value)} />
                        </FormGroup></Col>{profileImg}
                    </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Username</Label>
                                    <Input bsSize="sm" value={username} onChange={e => dispatch(setUsername(e.target.value))} id="username" placeholder="username" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Password</Label>
                                    <Input bsSize="sm" type="password" value={password} onChange={e => dispatch(setPassword(e.target.value))} id="password" placeholder="password" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={3}>
                                <FormGroup>
                                    <Label >Age</Label>
                                    <Input bsSize="sm" value={age} onChange={e => dispatch(setAge(e.target.value))} placeholder="age" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Email</Label>
                                    <Input bsSize="sm" type="email" value={email} onChange={e => dispatch(setEmail(e.target.value))} placeholder="email@mail.sfsu.edu" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="exampleAddress">College Year</Label>
                            <Input type="select" bsSize="sm" value={collegeyear} onChange={e => dispatch(setCollegeYear(e.target.value))}>
                                    <option value=""></option>
                                    <option value="Freshman">Freshman</option>
                                    <option value="Sophomore">Sophomore</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Senior">Senior</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">Major</Label>
                            <Input type="text" value={major} onChange={e => dispatch(setMajor(e.target.value))} placeholder="what is your major?" />
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
                            <Input type="textarea" name="text" id="exampleText" value={info} onChange={e => dispatch(setInfo(e.target.value))} placeholder="preference, interest, anyting you want to share..." />
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
    isUpdateOpen: state.pageReducer.isUpdateOpen,
    username: state.userReducer.username,
    password: state.userReducer.password,
    age: state.userReducer.age,
    email: state.userReducer.email,
    major: state.userReducer.major,
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    info: state.userReducer.info,
    listed: state.userReducer.listed,
    identity: state.userReducer.identity,
    preference: state.userReducer.preference,
    collegeYear: state.userReducer.collegeYear,

 });

export default connect(mapStateToProps)(Update);