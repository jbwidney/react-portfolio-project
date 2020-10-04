import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Label, Button, Container } from 'reactstrap'
import Slide from 'react-reveal/Slide'

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            whichClass:'',
            referal:'',
            touched:{
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
                whichClass: false,
                referal: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render(){
     return(
         <Slide left>
         <div>
         <Container>
            <Row>
                <Col className="text-center">
                <h1>Sign up</h1>
                </Col>
            </Row>
            <Row className="signUp">
                <Col md={12}>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstName" md={2}>First Name</Label>
                        <Col md={4}>
                            <Control.text 
                                model=".firstName" 
                                id="firstName" 
                                name="firstName"
                                placeholder="First Name"
                                className = "form-control"
                                validators = {{required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                    className="text-danger"
                                    model=".firstName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: "Required",
                                        minLength: "Must be at least 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }}
                                    />
                        </Col>
                    
                        <Label htmlFor="lastName" md={2}>Last Name</Label>
                        <Col md={4}>
                            <Control.text 
                                model=".lastName" 
                                id="lasttName" 
                                name="lastName"
                                placeholder="Last Name"
                                className = "form-control"
                                validators = {{required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                }}
                            />
                             <Errors
                                    className="text-danger"
                                    model=".lastName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: "Required",
                                        minLength: "Must be at least 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }}
                                    />

                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="phoneNum" md={2}>Phone Number</Label>
                        <Col md={4}>
                            <Control.text 
                                model=".phoneNum" 
                                id="phoneNum" 
                                name="phoneNum"
                                placeholder="Phone Number"
                                className="form-control"
                                validators = {{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber}}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".phoneNum"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: "Required",
                                        minLength: "Must be at least 10 numbers",
                                        maxLength: "Must be 15 numbers or less",
                                        isNumber: "Must be a number"
                                    }}
                                    />
                        </Col>
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={4}>
                            <Control.text
                                model=".email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                validators = {{
                                            required,
                                            validEmail
                                        }}
                            />
                            <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: "Required",
                                        validEmail: "Invalid email address"
                                    }}
                                    />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="whichClass" md={4}>Which class would you like to try?</Label>
                        <Col md={4}>
                            <Control.select
                                model=".whichClass"
                                id="whichClass"
                                name="whichClass"
                                className="form-control"
                                >
                              
                                
                                    <option>Select a class</option>
                                    <option>Kung Fu</option>
                                    <option>Sanda</option>
                                    <option>Contemporary Wushu</option>
                                    <option>Tai Chi</option>
                                    

                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="referal" md={4}>How did you hear about us?</Label>
                        <Col md={4}>
                        <Control.select
                                model=".referal"
                                id="referal"
                                name="referal"
                                className="form-control" >
                                    <option></option>
                                    <option>Social Media</option>
                                    <option>Internet Search</option>
                                    <option>Student referal</option>
                                    <option>other</option>

                            </Control.select>
                            </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Button type="submit" color="warning">
                            Sign Up

                            </Button>
                        </Col>



                    </Row>



                </LocalForm>

                </Col>
            </Row>




         </Container>
         </div>
         </Slide>
     )   
    }
}




export default SignUp
