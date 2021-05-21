import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './navbar.scss';
import Button from '@material-ui/core/Button';

const Navbar = ({ user, setUser }) => {
  const handleDevelop = () => {
    setUser(2);
  }

  const handleClient = () => {
    setUser(1);
  }

  return (
    <Row className='Navbar'>
      <Col sm={8} className='Slogan'> Madre Selva</Col>
      <Col sm={1} className='Client'>
        <Button onClick={handleClient}>Videos</Button>
      </Col>
      <Col sm={1} className='Developer2'>
        <Button onClick={handleDevelop}>Uploads</Button>
      </Col>
      <Col sm={1} >
        <Button >Conócenos</Button>
      </Col>
      <Col sm={1} >
        <Button >Chanti</Button>
      </Col>
    </Row>
  )
}
export default Navbar;