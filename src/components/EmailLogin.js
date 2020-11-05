import React from 'react'

import { useForm } from "react-hook-form";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

//import axios from 'axios';


// child comp

export default function EmailLogin() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    function formSubmit() {
        console.log('form.submit')
    }


    // axios({
    //     method: 'post',
    //     url: 'http://www.api.paramafashion.com/api/user_signup_email',
    //     data: this.formdata
    // });

    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Log In">
                    <h1>Login</h1>
                </Tab>
                <Tab eventKey="profile" title="Sign Up" style={{ "width": "60vh" }}>
                    <Container>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="user_email" ref={register({ required: true })} type="email" placeholder="Enter email" />
                                {errors.user_email && <span>Email is required</span>}
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="user_password" ref={register({ required: true })} type="password" placeholder="Enter Password" />
                                {errors.user_password && <span>Password is required</span>}
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={formSubmit}>
                                Submit
                            </Button>
                        </form>

                    </Container>
                </Tab>
            </Tabs>
        </div>
    )
}
