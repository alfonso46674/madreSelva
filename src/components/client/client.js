import React, { useState, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import './client.scss';
import Button from '@material-ui/core/Button';
import Axios from 'axios'
import Modal from 'react-modal';

const Client = () => {
  const url = '  https://c1tm95660k.execute-api.us-east-1.amazonaws.com/dev/subirticket';

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px'
    }
  };
  // Setting the original dataset to null
  const [data, setData] = useState({
    ticket: {
      id: '',
      summary: '',
      email: '',
      date: '',
      description: '',
      assignedDev2: "",
      assignedDev3: "",
      attachedFiles: ""
    }
  })
  const [modalIsOpen, setIsOpen] = useState(false);
  const [resultID, setResultID] = useState('')
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  // Function that generates a random id number and adds it to every submit form
  const randomID = () => {
    var myElement = document.getElementById("id")
    myElement.value = Math.floor((Math.random() * 100) + 1)
    const newData = { ...data }
    newData.id = myElement.value
    setData(newData)
  }
  // This makes that the random function is triggered at the moment the page loades
  useEffect(() => {
    randomID()
  }, [])

  // Passes the info from the form to the newData JSON
  const myFunction = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  // Sends the json to the DB
  const submit = (e) => {
    e.preventDefault()
    console.log('data');
    console.log(data);
    Axios.post(url, {
      ticket: {
        id: data.id,
        summary: data.summary,
        email: '',
        date: data.date,
        description: data.description,
        assignedDev2: "",
        assignedDev3: "",
        attachedFiles: ""
      }
    }).then(res => {
      console.log('result!');
      // console.log(res.data);
      console.log(data.id);
    }).catch(err => {
      return console.log(err);
    })
    setResultID(data.id)
    openModal()
    randomID()
  }


  return (
    <>
      <Container className='ClientContainer' onSubmit={submit}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Container className='ClientContainer' onSubmit={submit}>
            <h1>Your ticket ID is:{resultID} </h1>
          </Container>
        </Modal>
        <Form className='ClientForm'>
          <Form.Group >
            <Form.Label>Summary</Form.Label>
            <Form.Control onChange={(e) => myFunction(e)} type="text" placeholder="Please enter a summary of the issue" id='summary' />
          </Form.Group>
          <Form.Group >
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={(e) => myFunction(e)} type="date" placeholder="Enter the date" id='date' />
          </Form.Group>
          <Form.Group >
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={(e) => myFunction(e)} as="textarea" placeholder="Please describe the issue" id='description' />
          </Form.Group>
          <Form.Group style={{ visibility: 'hidden' }}>
            <Form.Label>ID</Form.Label>
            <Form.Control onChange={(e) => myFunction(e)} type="text" placeholder="Please enter the Client´s name" id='id' />
          </Form.Group>
          <Button variant="contained" color="primary" type="submit" className='SubmitBtn' >
            Submit
        </Button>
        </Form>
      </Container>
      <Container className='ClientContainer' onSubmit={submit}>
        <Form className='ClientForm'>
          <Form.Group >
            <Form.Label>Search for your ticket</Form.Label>
            <Form.Control type="text" placeholder="Please enter your ticket ID:" id='ticketSearch' />
          </Form.Group>
          <Button variant="contained" color="primary" type="submit" className='SubmitBtn'>
            Search
        </Button>
        </Form>
      </Container>
    </>

  )
}

export default Client;