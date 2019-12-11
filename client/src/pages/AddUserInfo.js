import React, { useState } from 'react';
import './css/Profile.css';
import {connect} from 'react-redux';
import img2 from './img/Snowglobe1.jpg';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Label, Fade, ButtonToolbar, Form, FormGroup, Input, Alert } from 'reactstrap';
import SnowStorm from 'react-snowstorm';
import history from './history'
import axios from 'axios';
import { Redirect } from 'react-router-dom'; //unusedK
import Upload from './Upload';
import {setCollegeYear, setMajor, setInfo, setGender, setListed, setPreference, setPronoun, setIsLoggedIn} from '../redux/actions/userActions';

const AddUserInfo = ({dispatch, isLoggedIn, collegeYear, pronoun, info, gender, listed, preference}) => {
    const [success, setSuccess] = useState('');
    // cyear, pronoun, info, gender, listed, preference

    const bgGround = { backgroundImage: 'url(' + img2 + ')', };

    function goProfile(e) {
        e.preventDefault()
        if (collegeYear !== '' && pronoun !== '' && gender !== '' && listed !== '' && preference !== '') {
            axios.post('/user/editProfile', {
                collegeYear,
                pronoun,
                gender,
                listed,
                preference,
                info,
            })
            .then((res) => { console.log(res) })
            // dispatch(setIsLoggedIn(true));
            console.log('IS LOGGED IN: ' + isLoggedIn);
            // history.push("/profile");
        } else { setSuccess('Require field(s) left empty.'); }

    }

    if (isLoggedIn) { return <Redirect to='/profile' /> }

    return (
        <div style={bgGround} id='bg'>
            <SnowStorm />
            <br /><br />
            <Container>
                <h4>Tell us more about you.</h4> <br />
                <Upload />
                <Form form>
                    <Row>
                        <FormGroup>
                            <Label for="exampleAddress">College Year</Label>
                            <Input type="select" bsSize="sm" value={collegeYear} onChange={e => dispatch(setCollegeYear(e.target.value))}>
                                <option value="" selected disabled>(required)</option>
                                <option value="Freshman">Freshman</option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="exampleAddress">I identify as.. </Label>
                            <Input type='text' value={gender} onChange={e => dispatch(setGender(e.target.value))} placeholder='Woman, Cisgender, Genderfluid..' />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for='exampleAddress2'>What are your pronouns?</Label>
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
                            <Label for="exampleAddress">List me as.. </Label>
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
                            <Label for="exampleAddress">Show me.. </Label>
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
                            <Label for='exampleText'>Important details you'd like to share?</Label>
                            <Input type='textarea' name='text' id='exampleText' value={info} onChange={e => dispatch(setInfo(e.target.value))} placeholder='Likes to sleep in Menchu Hall, troubled by the rampant consumerism of America..' />
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

export default connect(mapStateToProps)(AddUserInfo);