import React from "react";
import { useNavigate } from "react-router-dom";
import { Routestudentform } from "../Router/Router.jsx";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

const Login = () => {

const loginnavi =  useNavigate();

const login = () => {
    loginnavi(Routestudentform.studentlist)
    }
const [email,Setemail] = React.useState('');
const [passowrd,Setpassword] = React.useState('');

const [result,setResult] = React.useState('');
const [loginstate,setloginstate] = React.useState(false);

const onSubmit = (event) => {
    event.preventDefault();
   
   if (email === 'test@gmail.com' && passowrd === '12345678') 
    {
        setResult('Login Sucessful');
        setloginstate(true);
        login();
    } else {
        setResult('Login Unsucessful');
        setloginstate(false);
    }
}

return  <div> 

<div class="d-flex justify-content-center align-items-center vh-100">
    <Card>
        <Card.Header>Login</Card.Header>
    <Card.Body>
        <Form onSubmit={onSubmit}>
        <Form.Control
            type="text" 
            value={email} 
            name="email" 
            id="email" 
            placeholder="Enter email" 
            onChange={(e) => Setemail(e.target.value)}/> <br />
        <Form.Control 
            type="password" 
            value={passowrd} 
            name="password" 
            id="password" 
            placeholder="Enter password" 
            onChange={(e) => Setpassword(e.target.value)}/> <br />
        <Button variant="primary"
            type="submit" 
            value={"Login"}> Login </Button>
        <br />

        {!loginstate && <Alert variant={'danger'}>{result}</Alert>}

         {/* if {loginstate?<Alert variant='danger' style={{margin : "10px"}}>{result}</Alert>: 
                        <Alert variant='danger' style={{margin : "10px"}}>{result}</Alert>} */}
        </Form>
    </Card.Body>
    </Card>
</div>
</div>
}

export default Login