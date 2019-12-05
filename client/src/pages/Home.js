import React, { useState } from 'react';
import './css/Home.css';
import img from './img/bg.jpg';
import { Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Label, Fade, ButtonToolbar, Form, FormGroup, Input, Alert } from 'reactstrap';
import Cookies from 'js-cookie'
import md5 from 'md5'
import axios from 'axios'

import history from './history'

var validator = require("email-validator");

const options = {
    withCredentials: true
};


const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [collegeyear, setCollegeYear] = useState('');
    const [major, setMajor] = useState('');
    const [addtion, setAddtion] = useState('');
    const [success, setSuccess] = useState('');


    const [loginBox, setLoginBox] = useState(false);
    const [createBox, setCreateBox] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);


    const [loginBox, setLoginBox] = useState(false);
    const [createBox, setCreateBox] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);

    const [isLoggedIn, setisLogdedIn] = useState(false);



    const bgGround = {
        backgroundImage: 'url(' + img + ')',
    };
    function selectOnlyThis(id) {
        var myCheckbox = document.getElementsByName("myCheckbox");
        Array.prototype.forEach.call(myCheckbox, function (el) {
            el.checked = false;
        });
        id.checked = true;
    }


    const goLogin = (e) => {
        setLoginBox(true);
        setFadeIn(false);
        setCreateBox(false);
        setUsername('');
        setPassword('');
        document.getElementById("greeting").style.display = "none";
    }

    const goCreate = (e) => {
        setLoginBox(false);
        setFadeIn(false);
        setCreateBox(true);
        setUsername('');
        setPassword('');
        document.getElementById("greeting").style.display = "none";
    }

    const createUser = (e) => {
        e.preventDefault();
        if (username !== 0 && password !== 0 && age !== 0 && email !== 0 && collegeyear !== '' && major !== 0) {
            if (validator.validate(email)) {
                axios.post("/createUser", {
                    username,
                    password: md5(password),
                    age,
                    email,
                    collegeyear,
                    major,
                    addtion,
                })
                    .then((res) => {
                        setSuccess(res.data);
                    })
                    .catch(err => console.log(err));
            } else {
                setSuccess('Missing \'@\' on email');
            }
        } else {
            setSuccess('Invalid. Please type in something.');
        }
    }

    const goHome = () => {
        setCreateBox(false);
        setLoginBox(false);
        setFadeIn(true);
        setAge('');
        setEmail('');
        setCollegeYear('');
        setMajor('');
        setAddtion('');
        setSuccess('');
        document.getElementById("greeting").style.display = "inline";
    }

    function goProfile(e) {
        e.preventDefault();
        if (username != 0 && password != 0) {
            const body = {
                username,
                password: md5(password),
            }
            axios.post('/login', body, options)
                .then((res) => {
                    setPassword("");
                    if (res.data) {
                        Cookies.set("username", body.username);
                        Cookies.set("password", body.password);
                        Cookies.set("isLoggedIn", true);

                    } else {
                        Cookies.set("username", "");
                        Cookies.set("password", "");
                        Cookies.set("isLoggedIn", false);
                    }
                    console.log(res);
                }).then(() => {
                    history.push("/profile");
                })
                .catch(e => console.log(e));
        } else {
            setSuccess("Failed. Wrong username and/or password");
        }
    }

    const Log = () => {
        return (
            <div>
                <Alert color="black" isOpen={loginBox} id="login" >
                    <h4> Welcome back</h4><br />

                    <Form>
                        <FormGroup>
                            <Label >Username</Label>
                            <Input bsSize="sm" value={username} onChange={e => setUsername(e.target.value)} id="username" placeholder="admin" />
                        </FormGroup>
                        <FormGroup>
                            <Label >Password</Label>
                            <Input bsSize="sm" type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="******" />
                        </FormGroup>

                        <Row form>
                            <Col md={6}>
                                <Button onClick={goProfile} variant="warning" block>Submit</Button>
                            </Col>
                            <Col md={6}>
                                <Button onClick={goHome} variant="warning" block>Not now</Button>
                            </Col>
                        </Row>
                    </Form>
                    <h5>{success}</h5>

                </Alert>
            </div>
        )
    }

    const Create = () => {
        return (
            <div>
                <Alert color="black" isOpen={createBox} id="login" > <br /><br />
                    <h4> Create Page</h4><br />
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
                            <Input type="select" bsSize="sm" value={collegeyear} onChange={e => setCollegeYear(e.target.value)}>
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
                            <Input type="textarea" name="text" id="exampleText" value={addtion} onChange={e => setAddtion(e.target.value)} placeholder="preference, interest, anyting you want to share..." />
                        </FormGroup>

                        <br />
                        <Row form>
                            <Col md={6}>
                                <Button onClick={createUser} variant="warning" block>Sign Up</Button>
                            </Col>
                            <Col md={6}>
                                <Button onClick={goHome} variant="warning" block>Not now</Button>
                            </Col>
                        </Row>
                    </Form>
                    <h5>{success}</h5>
                </Alert>
            </div>
        )
    }

    return (
        <div style={bgGround} id="bg">
            <Container >
                <Row>

                    {loginBox && (
                        <Col sm="12" md={{ size: 6, offset: 4 }}>
                            <div className="iBox" >{Log()}</div>
                        </Col>
                    )}



                    {createBox && (
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <div className="cBox">{Create()}</div>
                        </Col>
                    )}




                    <Fade in={fadeIn} id="greeting">
                        <h1>Gator.Dater</h1>
                        <p>A dating app for SFSU students, in which students register and see people who match their dating interests. <br />
                            Our goal is to make our fellow SFSU students feel a little less cold this winter.</p>

                        <ButtonToolbar>
                            <Button onClick={goLogin} variant="outline-warning">Get started  </Button>  &nbsp;&nbsp;
                    <Button onClick={goCreate} variant="outline-warning" >Sign up</Button>
                        </ButtonToolbar>
                    </Fade>

                </Row>
            </Container>
        </div>
    );
};

export default Home;