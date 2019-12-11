import React, { useState } from 'react';
import './css/Profile.css';

import img2 from './img/Snowglobe1.jpg';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Label, Fade, ButtonToolbar, Form, FormGroup, Input, Alert } from 'reactstrap';
import SnowStorm from 'react-snowstorm';
import history from './history'
import axios from 'axios';
import Upload from './Upload'

const AddUserInfo = () => {
    const [collegeyear, setCollegeYear] = useState('');
    const [major, setMajor] = useState('');
    const [addtion, setAddtion] = useState('');
    const [gender, setGender] = useState('');
    const [success, setSuccess] = useState('');
    const bgGround = { backgroundImage: 'url(' + img2 + ')', };

    function goProfile(e) {
        e.preventDefault()
        if (collegeyear !== '' && major !== 0 && gender !== '') {
            axios.post('/user/editProfile', {
                collegeyear,
                major,
                gender,
                addtion,
            })
            history.push("/profile");
        } else {
            setSuccess('Fields cannot be left empty!');
        }
    }

    return (
        <div style={bgGround} id='bg'>
            <SnowStorm />
            <br /><br />
            <Container>
                <h4>Update Profile</h4> <br />
                <Upload />
                <Form form>
                    <Row>
                        <FormGroup>
                            <Label for="exampleAddress">College Year</Label>
                            <Input type="select" bsSize="sm" value={collegeyear} onChange={e => setCollegeYear(e.target.value)}>
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
                            <Input type='text' value={major} onChange={e => setMajor(e.target.value)} placeholder='what is your major?' />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="exampleAddress">Gender</Label>
                            <Input type="select" bsSize="sm" value={gender} onChange={e => setGender(e.target.value)}>
                                <option value="" selected disabled>Please select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Gender Fluid">Gender Fluid</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for='exampleText'>We want to know more about you.</Label>
                            <Input type='textarea' name='text' id='exampleText' value={addtion} onChange={e => setAddtion(e.target.value)} placeholder='preference, interest, anyting you want to share...' />
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

export default AddUserInfo;