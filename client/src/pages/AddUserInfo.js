import React, { useState } from 'react';
import './css/Profile.css';
import {connect} from 'react-redux';
import img2 from './img/Snowglobe1.jpg';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Label, Fade, ButtonToolbar, Form, FormGroup, Input, Alert } from 'reactstrap';
import SnowStorm from 'react-snowstorm';
import history from './history'
import axios from 'axios';
import {setCollegeYear, setMajor, setInfo, setGender, setPreference} from '../redux/actions/userActions';

const AddUserInfo = ({dispatch, collegeYear, major, info, gender, preference}) => {
    const [success, setSuccess] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const bgGround = { backgroundImage: 'url(' + img2 + ')', };

    function goProfile(e) {
        e.preventDefault()
        if (collegeYear !== '' && major !== 0 && gender !== '') {
            axios.post('/user/editProfile', {
                collegeYear,
                major,
                gender,
                preference,
                info,
            })
            history.push("/profile");
        } else {
            setSuccess('Fields cannot be left empty!');
        }
    }

    function uploadImg(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',profileImg);
        const config = {
            headers: {
                'contentType': 'multipart/form-data'
            }
        };
        axios.post("/user/uploadPic", {
            formData,
            config,
        })
        .then((res) => {
            if(res.data) {
                alert('Success');
            }
        })
    }


    return (
        <div style={bgGround} id='bg'>
            <SnowStorm />
            <br /><br />
            <Container>
                <h4>Update Profile</h4> <br /><br />
                <Form form>
                    <Row>
                        <FormGroup>
                            <Label>You can upload your img here</Label>
                            <Input type="file" id="imgFile" onChange ={e => setProfileImg(e.target.files[0])} />
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Button onClick={uploadImg} variant='warning' block>upload</Button>
                        </Col>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="exampleAddress">College Year</Label>
                            <Input type="select" bsSize="sm" value={collegeYear} onChange={e => dispatch(setCollegeYear(e.target.value))}>
                                <option value="" selected disabled>Please select</option>
                                <option value="Freshman">Freshman</option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for='exampleAddress2'>Major</Label>
                            <Input type='text' value={major} onChange={e => dispatch(setMajor(e.target.value))} placeholder='what is your major?' />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="exampleAddress">Gender</Label>
                            <Input type="select" bsSize="sm" value={gender} onChange={e => dispatch(setGender(e.target.value))}>
                                <option value="" selected disabled>Please select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Gender Fluid">Gender Fluid</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row>
                    <FormGroup>
                    <Label for="exampleAddress">Preference</Label>
                    <Input type="select" bsSize="sm" value={preference} onChange={e => dispatch(setPreference(e.target.value))}>
                        <option value="" selected disabled>Please select</option>
                        <option value="M">Men</option>
                        <option value="F">Women</option>
                        <option value="E">Everyone</option>
                    </Input>
                    </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for='exampleText'>We want to know more about you.</Label>
                            <Input type='textarea' name='text' id='exampleText' value={info} onChange={e => setInfo(e.target.value)} placeholder='preference, interest, anyting you want to share...' />
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Button onClick={goProfile} variant='warning' block>Finish!</Button>
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