import { React, useEffect, useState } from 'react'; //Use effect used on load
import './developer2.scss';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Form, Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

const Developer2 = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([])
  function openModal(e) {
    e.preventDefault()
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  useEffect(() => {
    axios.get('https://c1tm95660k.execute-api.us-east-1.amazonaws.com/dev/conseguirticket')
      .then(res => {
        console.log(res)
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  function test(a) {
    console.log(a.value);
  }

  return (
    <Container className='DevContainer'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
      <div>
        {
          users.map(users => {
            return (
              <table className='ticketTable'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Assigned Dev 2</th>
                  <th>Assigned Dev 3</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td onClick={test}>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.date}</td>
                  <td>{users.assignedDev2}</td>
                  <td>{users.assignedDev3}</td>
                  <td>{users.description}</td>
                  <td><a href=''>Edit</a><button  >Show</button> </td>
                </tr>
              </table>
            );
          })
        }
      </div>
    </Container>
  )
}

export default Developer2;