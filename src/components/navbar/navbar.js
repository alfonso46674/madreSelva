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
        <Button><Link to='/' className='navbar-text'>Inicio</Link></Button>
      </Col>
      <Col sm={1}>
        <Button><Link to='/uploads' className='navbar-text'>Publicar</Link></Button>
      </Col>
      <Col sm={1} >
        <Button ><Link to='/contact' className='navbar-text' >Conócenos</Link></Button>
      </Col>
      <Col sm={1} >
        <Button ><Link to='/admin'className='navbar-text'>Admin</Link></Button>
      </Col>
    </Row>
    
  )
}
export default Navbar;