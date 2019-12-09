import React, { useState } from 'react';
import './css/Home.css';
//import img from './img/bg.jpg';
import img2 from './img/Snowglobe2.jpg';
import SnowStorm from 'react-snowstorm';
// import { Redirect } from 'react-router-dom'; //unusedK
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Label, Fade, ButtonToolbar, Form, FormGroup, Input, Alert } from 'reactstrap';
import Cookies from 'js-cookie'
import md5 from 'md5'
import axios from 'axios'
import NavBar from './NavBar';

import history from './history'

var validator = require('email-validator');

const options = {
    withCredentials: true
};


const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    // const [collegeyear, setCollegeYear] = useState('');
    // const [major, setMajor] = useState('');
    // const [addtion, setAddtion] = useState('');
    const [success, setSuccess] = useState('');

    const [loginBox, setLoginBox] = useState(false);
    const [createBox, setCreateBox] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const bgGround = { backgroundImage: 'url(' + img2 + ')', };

    const goLogin = (e) => {
        setLoginBox(true);
        setFadeIn(false);
        setCreateBox(false);
        setUsername('');
        setPassword('');
        document.getElementById('greeting').style.display = 'none';
    }

    const goCreate = (e) => {
        setLoginBox(false);
        setFadeIn(false);
        setCreateBox(true);
        setUsername('');
        setPassword('');
        document.getElementById('greeting').style.display = 'none';
    }

    const createUser = (e) => {
        e.preventDefault();
        if (username !== 0 && password !== 0 && age !== 0 && email !== 0) {
            if (validator.validate(email)) {
                axios.post('/createUser', {
                    username,
                    password: md5(password),
                    firstname,
                    lastname,
                    age,
                    email,
                })
                    .then((res) => {
                        setSuccess(res.data);
                        if (success === 'Success') {
                            Cookies.set("username", username);
                            Cookies.set("password", md5(password));
                            Cookies.set("isLoggedIn", true);
                            history.push("/adduserinfo");
                        }
                    }).catch(err => console.log(err));
            } else { setSuccess('Missing \'@\' on email'); }
        } else { setSuccess('Invalid. Please type in something.'); }

    }

    const goHome = () => {
        setCreateBox(false);
        setLoginBox(false);
        setFadeIn(true);
        setAge('');
        setEmail('');
        setSuccess('');
        document.getElementById('greeting').style.display = 'inline';
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
                }).catch(e => console.log(e));
        } else {
            setSuccess("Failed. Wrong username and/or password");
        }
    }

    const Log = () => {
        return (
            <div>
                <Alert color='black' isOpen={loginBox} id='login' >
                    <h4> Welcome back</h4><br />

                    <Form>
                        <FormGroup>
                            <Label >Username</Label>
                            <Input bsSize='sm' value={username} onChange={e => setUsername(e.target.value)} id='username' placeholder='admin' />
                        </FormGroup>
                        <FormGroup>
                            <Label >Password</Label>
                            <Input bsSize='sm' type='password' value={password} onChange={e => setPassword(e.target.value)} id='password' placeholder='******' />
                        </FormGroup>

                        <Row form>
                            <Col md={6}>
                                <Button onClick={goProfile} variant='warning' block>Submit</Button>
                            </Col>
                            <Col md={6}>
                                <Button onClick={goHome} variant='warning' block>Not now</Button>
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
                <Alert color='black' isOpen={createBox} id='login' > <br /><br />
                    <h4> Create Page</h4><br />
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Username</Label>
                                    <Input bsSize='sm' value={username} onChange={e => setUsername(e.target.value)} id='username' placeholder='username' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Password</Label>
                                    <Input bsSize='sm' type='password' value={password} onChange={e => setPassword(e.target.value)} id='password' placeholder='password' />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >First Name</Label>
                                    <Input bsSize='sm' value={age} onChange={e => setFirstName(e.target.value)} placeholder='age' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Last Name</Label>
                                    <Input bsSize='sm' type='email' value={email} onChange={e => setLastName(e.target.value)} placeholder='email@mail.sfsu.edu' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <FormGroup>
                                    <Label >Age</Label>
                                    <Input bsSize='sm' value={age} onChange={e => setAge(e.target.value)} placeholder='age' />
                                </FormGroup>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Email</Label>
                                    <Input bsSize='sm' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='email@mail.sfsu.edu' />
                                </FormGroup>
                            </Col>
                        </Row>

                        <br />

                        <Row form>
                            <Col md={6}>
                                <Button onClick={createUser} variant='warning' block>Sign Up</Button>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={6}>
                                <Button onClick={goHome} variant='warning' block>Not now</Button>
                            </Col>
                        </Row>
                    </Form>
                    <h5>{success}</h5>
                </Alert>
            </div>
        )
    }

    return (
        <div style={bgGround} id='bg'>

            {/* For the snow baby. */}
            <SnowStorm />
            {/* References Raymond Test NavBar */}
            <NavBar />
            <Container >
                <Row>
                    {loginBox && (
                        <Col sm='12' md={{ size: 6, offset: 4 }}>
                            <div className='iBox' >{Log()}</div>
                        </Col>
                    )}

                    {createBox && (
                        <Col sm='12' md={{ size: 6, offset: 3 }}>
                            <div className='cBox'>{Create()}</div>
                        </Col>
                    )}

                    <Fade in={fadeIn} id='greeting'>
                        <h1>Gator.Dater</h1>
                        <p>A dating app for SFSU students, in which students register and see people who match their dating interests. <br />
                            Our goal is to make our fellow SFSU students feel a little less cold this winter.</p>

                        <ButtonToolbar>
                            <Button onClick={goLogin} variant='outline-warning'>Get started  </Button>  &nbsp;&nbsp;
                            <Button onClick={goCreate} variant='outline-warning' >Sign up</Button>
                        </ButtonToolbar>
                    </Fade>
                </Row>
            </Container>
        </div>
    );
};

export default Home;