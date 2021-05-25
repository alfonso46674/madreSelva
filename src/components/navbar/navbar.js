import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './navbar.scss';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
const Navbar = ({ user, setUser }) => {

  return (
    <Row className='Navbar'>
      <Col sm={8} className='Slogan'>logo<img src='../../../logo.png'></img></Col>
      <Col sm={1} className='Client'>
        <Button><Link to='/'>Inicio</Link></Button>
      </Col>
      <Col sm={1} className='Developer2'>
        <Button><Link to='/uploads'>Publicar</Link></Button>
      </Col>
      <Col sm={1} >
        <Button ><Link to='/contact'>Conócenos</Link></Button>
      </Col>
      <Col sm={1} >
        <Button ><Link to='/admin'>Admin</Link></Button>
      </Col>
    </Row>
    
  )
}
export default Navbar;