import React from 'react';
import './developer2.scss';
import { Form,  Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const Developer2 = () => {
  return (
    <Container className='DevContainer'>
      <Form className='DevForm'>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="This will be the ticket ID" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter the date" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Client´s name</Form.Label>
          <Form.Control type="text" placeholder="Please add the client´s name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Developer 2</Form.Label>
          <Form.Control type="text" placeholder="Name of the developer 2 in charge" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Developer 3</Form.Label>
          <Form.Control type="text" placeholder="Name of the developer 3 in charge" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Start date</Form.Label>
          <Form.Control type="date" placeholder="Enter the start date of the ticket" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Solution</Form.Label>
          <Form.Control as="textarea" placeholder="Please describe the solution of the ticket" />
        </Form.Group>

        <Button variant="contained" color="primary" type="submit" className='SubmitBtn'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Developer2;