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
      <Col sm={8} className='Slogan'> Ticket solution system</Col>
      <Col sm={2} className='Client'>
        <Button onClick={handleClient}>Cliente</Button>
      </Col>
      <Col sm={2} className='Developer2'>
        <Button onClick={handleDevelop}>Developer</Button>
      </Col>
    </Row>
  )
}
export default Navbar;