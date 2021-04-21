import React from 'react';
import { Form, Container } from 'react-bootstrap';
import './client.scss';
import Button from '@material-ui/core/Button';

const Client = () => {
  return (
    <Container className='ClientContainer'>
      <Form className='ClientForm'>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Please enter the Client´s name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter the date" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="This will be the ticket ID" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Please describe the issue" />
        </Form.Group>
        <Button variant="contained" color="primary" type="submit" className='SubmitBtn'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Client;