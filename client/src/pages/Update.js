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
import space from './img/bg.jpg';
import axios from 'axios';
import history from './history'

const Update = ({ dispatch, isUpdateOpen, collegeYear, password, age,
    email, major, info, firstName, lastName, preference, pronoun, listed, gender }) => {

    const [success, setSuccess] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [errormessage, setErrorMessage] = useState('');

    const closeUpdate = () => {
        dispatch(setIsUpdateOpen(false));
    }

    const bgGround = {
        backgroundImage: 'url(' + space + ')',
        height: '850px',
    };

    function goProfile(e) {
        console.log('CYEAR' + collegeYear);
        e.preventDefault()
        if (collegeYear !== '' && pronoun !== '' && gender !== '' && listed !== '' && preference !== '') {
            axios.post('/user/editProfile', {
                collegeYear,
                gender,
                pronoun,
                listed,
                preference,
                info,
            })
            .then(()=>{
                history.push("/profile")});
        } else { setSuccess('Require field(s) left empty.'); }
    }
    return (
      
        <div style={bgGround} id='bg'>

            <SnowStorm />
            <br /><br />
            <Container className="con">
                <h4>Tell us more about you.</h4><br />
                <Upload />
                <Form form>
                    <Row>
                        
                            <Label for="exampleAddress">College Year</Label>
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
                            <Label for="exampleAddress">I identify as.. </Label>
                            <Input type='text' value={gender} onChange={e => dispatch(setGender(e.target.value))} placeholder='Woman, Cisgender, Genderfluid..' />
                        </Col>
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