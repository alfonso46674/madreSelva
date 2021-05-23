import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './videos.scss';
import Button from '@material-ui/core/Button';
import { DropdownButton, Dropdown } from 'react-bootstrap'
const Videos = () => {

  return (
    <Container className='VideosContainer'>
      <Form className='VideosForm'>
        <Row>
          <Col sm={4} className=''>
            <Form.Group >
              <Form.Label>Filtrar por título</Form.Label>
              <Form.Control type="text" placeholder="Escriba el título que quiera buscar" id='summary' />
            </Form.Group>
          </Col>
          <Col sm={4} className=''>
            <Form.Group >
              <Form.Label>Filtrar por autor</Form.Label>
              <Form.Control type="texxt" placeholder="Escriba el nombre del autor" id='date' />
            </Form.Group>
          </Col>
          <Col sm={4} className=''>
            <Form.Group >
              <Form.Label>Filtrar por categorías</Form.Label>
              <DropdownButton id="dropdown-basic-button" title="Seleccionar">
                <Dropdown.Item >Crítica</Dropdown.Item>
                <Dropdown.Item>Educación</Dropdown.Item>
                <Dropdown.Item>Difusión</Dropdown.Item>
                <Dropdown.Item>Investigación</Dropdown.Item>
                <Dropdown.Item>Otros</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="contained" color="primary" type="submit" className='SubmitBtn' >
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Videos;
