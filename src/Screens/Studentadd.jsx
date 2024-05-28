import React, { useState } from "react";
import { Button, Form, Row, Col, Container, CardTitle, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Routestudentform } from "../Router/Router";


const Studentadd = () => {

    const [Gender,setGender] = useState('Select Gender');
    const [Languagesknown,setLanguagesknown] = useState('Select Language');
   
    const GenderOptions = [
        {
            label: "Select Gender",
            value: "default",
          },
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ];
      const selectLanguagesknown = [
        {
            label: "Select Language",
            value: "default",
          },
        {
          label: "English",
          value: "english",
        },
        {
          label: "Tamil",
          value: "tamil",
        },
      ];

const addnav = useNavigate();

    const btnadd = () => {
    
        addnav(Routestudentform.studentlist);

    }

    const btnback = () => {
        addnav(Routestudentform.studentlist);
    }

    return <div>
    <Form>
      <Container>
        <Card>
        <Card.Header as="h5">Add student details</Card.Header>
        <Card.Body>
            <Form.Group>
              <Row >
                <Col sm="2">
                  <Form.Label>Student Name</Form.Label> </Col>
                <Col sm="5"> 
                    <Form.Control type="name" placeholder="Name of the student"/> </Col>
                <Col sm="2">
                    <Form.Label>Select Gender</Form.Label> </Col>
                <Col sm="3">
                    <Form.Select value={Gender}>
                    {GenderOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                    </Form.Select></Col>
              </Row>
              
              <Row>
              <Col sm="2">
                  <Form.Label>Date of birth</Form.Label> </Col>
                <Col sm="5"> 
                    <Form.Control type="date"/> </Col>
              <Col sm="2">
                    <Form.Label>Language known</Form.Label> </Col>
                <Col sm="3">
                    <Form.Select value={Gender}>
                    {selectLanguagesknown.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                    </Form.Select></Col>
              </Row>

              <Row> 
                    <Form.Label>Address</Form.Label> 
                </Row>
              <Row>
                  <Form.Control as="textarea" rows={3} />
              </Row>
              
          <Container>
            <Row>
           
              <Col> 
                <Button variant="primary" onClick={btnadd}>Add</Button> 
              </Col> 
              <Col>
                <Button variant="secondary" onClick={btnback}>Back</Button>
                </Col> 
            </Row>
            
          </Container>
      </Form.Group>
      
      </Card.Body>
      </Card>
      </Container>
    </Form>  
  </div>
}

export default Studentadd;