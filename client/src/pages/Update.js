import React, { useState } from 'react';
import { connect } from 'react-redux';
// importing update redux
import { updateProfile } from '../redux/actions/updateActions';
import { setIsUpdateOpen } from '../redux/actions/pageAction';
import { setPassword, setAge, setEmail, setMajor, setInfo, setCollegeYear, setFirstName, setLastName, setPreference, setPronoun, setGender, setListed } from '../redux/actions/userActions';
import { Button } from 'react-bootstrap';
import SnowStorm from 'react-snowstorm';
import './css/Update.css';
import Upload from './Upload';
import { Container, Row, Col, Label, Form, FormGroup, Input, Alert } from 'reactstrap';
import img2 from './img/newBG.png';
import axios from 'axios';
import history from './history'
import md5 from 'md5'

const Update = ({ dispatch, isUpdateOpen, collegeYear, username, password, age,
    email, major, info, firstName, lastName, preference, pronoun, listed, gender }) => {

    const [success, setSuccess] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [errormessage, setErrorMessage] = useState('');

    const closeUpdate = () => {
        dispatch(setIsUpdateOpen(false));
    }

    const bgGround = {
        backgroundImage: 'url(' + img2 + ')',
    };

    function goProfile(e) {
        console.log('CYEAR' + collegeYear);
        e.preventDefault()
        if (collegeYear !== '' && pronoun !== '' && gender !== '' && listed !== '' && preference !== '') {
            axios.post('/user/editProfile', {
                username,
                password: md5(password),
                firstName,
                lastName,
                age,
                email,

                collegeYear,
                gender,
                pronoun,
                listed,
                preference,
                info,
            })
            .then(history.push("/profile"))
        } else { setSuccess('Require field(s) left empty.'); }
    }
    return (

        <div style={bgGround} id='bg'>
            <SnowStorm />
            <br /><br />
            <Container className="con">
                <h4>Update Profile</h4><br />
                <Upload />
                <Form form>
                    <Row>
                        <Col md={20}>
                            <Label className="ud" for="exampleAddress">First Name</Label>
                            <Input type='text' value={firstName} onChange={e => dispatch(setFirstName(e.target.value))} placeholder='...' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={20}>
                            <Label className="ud" for="exampleAddress">Last Name</Label>
                            <Input type='text' value={lastName} onChange={e => dispatch(setLastName(e.target.value))} placeholder='...' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={20}>
                            <Label className="ud" for="exampleAddress">Password</Label>
                            <Input type='text' value={password} onChange={e => dispatch(setPassword(e.target.value))} placeholder='...' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={20}>
                            <Label className="ud" for="exampleAddress">Age</Label>
                            <Input type='text' value={age} onChange={e => dispatch(setAge(e.target.value))} placeholder='(18 ~ 65)' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={20}>
                            <Label className="ud" for="exampleAddress">Email</Label>
                            <Input type='text' value={email} onChange={e => dispatch(setEmail(e.target.value))} placeholder='brianparra@mail.sfsu.edu' />
                        </Col>
                    </Row>
                    <Row>
                        <Label className="ud" for="exampleAddress">College Year</Label>
                        <Input type="select" bsSize="sm" value={collegeYear} onChange={e => dispatch(setCollegeYear(e.target.value))}>
                            <option value="" selected disabled>(required)</option>
                            <option value="Freshman">Freshman</option>
                            <option value="Sophomore">Sophomore</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                        </Input>
                    </Row>
                    <Row>
                        <Col md={20}>
                            <Label className="ud" for="exampleAddress">I identify as.. </Label>
                            <Input type='text' value={gender} onChange={e => dispatch(setGender(e.target.value))} placeholder='...' />
                        </Col>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label className="ud" for='exampleAddress2'>What are your pronouns?</Label>
                            <Input type="select" bsSize="sm" value={pronoun} onChange={e => dispatch(setPronoun(e.target.value))}>
                                <option value="" selected disabled>(required)</option>
                                <option value="She/Her">She/Her</option>
                                <option value="He/Him">He/Him</option>
                                <option value="They/them">They/them</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label className="ud" for="exampleAddress">List me as.. </Label>
                            <Input type="select" bsSize="sm" value={listed} onChange={e => dispatch(setListed(e.target.value))}>
                                <option value="" selected disabled>(required)</option>
                                <option value="W">Woman</option>
                                <option value="M">Man</option>
                                <option value="E">Non-binary</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label className="ud" for="exampleAddress">Show me.. </Label>
                            <Input type="select" bsSize="sm" value={preference} onChange={e => dispatch(setPreference(e.target.value))}>
                                <option value="" selected disabled>(required)</option>
                                <option value="W">Women</option>
                                <option value="M">Men</option>
                                <option value="E">Everyone</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label className="ud" for='exampleText'>Important details you'd like to share?</Label>
                            <Input type='textarea' name='text' id='exampleText' value={info} onChange={e => dispatch(setInfo(e.target.value))} placeholder='...' />
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Button onClick={goProfile} variant='warning' block>Complete</Button>
                        </Col>
                    </Row>
                    <h4>{success}</h4>
                </Form>
            </Container>
        </div>
    );
}

const mapStateToProps = state => ({
    isUpdateOpen: state.pageReducer.isUpdateOpen, //???

    username: state.userReducer.username,
    password: state.userReducer.password,
    age: state.userReducer.age,
    email: state.userReducer.email,
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