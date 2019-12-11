import React, { useState } from 'react';
import { connect } from 'react-redux';
// importing update redux
import { updateProfile } from '../redux/actions/updateActions';
import { setIsUpdateOpen } from '../redux/actions/pageAction';
import { setPassword, setAge, setEmail, setMajor, setInfo, setCollegeYear, setFirstName, setLastName, setPreference, setPronoun, setGender, setListed } from '../redux/actions/userActions';
import { Button } from 'react-bootstrap';
import './css/Update.css';
import Upload from './Upload';
import { Row, Col, Label, Form, FormGroup, Input, Alert } from 'reactstrap';
import space from './img/bg.jpg';

const Update = ({ dispatch, isUpdateOpen, username, collegeYear, password, age, email, major, info, firstName, lastName, preference, pronoun, listed, gender }) => {
    const [success, setSuccess] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [errormessage, setErrorMessage] = useState('');

    const closeUpdate = () => {
        dispatch(setIsUpdateOpen(false));
    }

    const bgGround = {
        backgroundImage: 'url(' + space + ')',
        height:'850px',
      };

    return (
        <div style={bgGround} >

            <div id="frame">
                <Alert color="black" id="con" >
                    <h4>Edit Profile</h4><br />
                    <Upload />
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Upload a pic?</Label>
                                    <Input type="file" id="imgFile" onChange={e => setProfileImg(e.target.value)} />
                                </FormGroup>
                            </Col>{profileImg}
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >First Name</Label>
                                    <Input bsSize="sm" value={firstName} onChange={e => dispatch(setFirstName(e.target.value))} id="FN" placeholder="FN" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Last Name</Label>
                                    <Input bsSize="sm" value={lastName} onChange={e => dispatch(setLastName(e.target.value))} id="LN" placeholder="LN" />
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
                            <Input type="select" bsSize="sm" value={collegeYear} onChange={e => dispatch(setCollegeYear(e.target.value))}>
                                <option value="" disabled>(required)</option>
                                <option value="Freshman">Freshman</option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress">I identify as.. </Label>
                            <Input type='text' value={gender} onChange={e => dispatch(setGender(e.target.value))} placeholder='Woman, Cisgender, Genderfluid..' />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">Pronouns</Label>
                            <Input type="select" bsSize="sm" value={pronoun} onChange={e => dispatch(setPronoun(e.target.value))}>
                                <option value="" selected disabled>(required)</option>
                                <option value="She/Her">She/Her</option>
                                <option value="He/Him">He/Him</option>
                                <option value="They/them">They/them</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress">List me as.. </Label>
                            <Input type="select" bsSize="sm" value={listed} onChange={e => dispatch(setListed(e.target.value))}>
                                <option value="" selected disabled>(required)</option>
                                <option value="W">Woman</option>
                                <option value="M">Man</option>
                                <option value="E">Non-binary</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress">Show me.. </Label>
                            <Input type="select" bsSize="sm" value={preference} onChange={e => dispatch(setPreference(e.target.value))}>
                                <option value="" selected disabled>(required)</option>
                                <option value="W">Women</option>
                                <option value="M">Men</option>
                                <option value="E">Everyone</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Important details you'd like to share?</Label>
                            <Input type="textarea" name="text" id="exampleText" value={info} onChange={e => dispatch(setInfo(e.target.value))} placeholder="preference, interest, anyting you want to share..." />
                        </FormGroup>

                        <br />
                        <Row form>
                            <Col md={6}>
                                {/* dispatching update redux. WIP */}
                                <Button variant="warning" onClick={() => dispatch(updateProfile())} block>Submit</Button>
                            </Col>
                            <Col md={6}>
                                <Button variant="warning" onClick={closeUpdate} block>Not Now</Button>
                            </Col>
                        </Row>
                    </Form>
                    <h5>{success}</h5>
                </Alert>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isUpdateOpen: state.pageReducer.isUpdateOpen, //???
    
    username: state.userReducer.username,
    password: state.userReducer.password,
    age: state.userReducer.age,
    email: state.userReducer.email,
    major: state.userReducer.major,
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    info: state.userReducer.info,
    listed: state.userReducer.listed,
    gender: state.userReducer.gender,
    pronoun: state.userReducer.pronoun,
    preference: state.userReducer.preference,
    collegeYear: state.userReducer.collegeYear,

});

export default connect(mapStateToProps)(Update);