import {React,useEffect} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './videos.scss';
import Button from '@material-ui/core/Button';
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Player, BigPlayButton } from 'video-react';
import axios from 'axios'

const Videos = () => {
  const url = 'http://localhost:8080/api/test'
  const submit = (e)=>{
    axios.get(url)
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

  }

  useEffect(()=>{
    axios.get(url)
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])


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
              <Form.Control type="text" placeholder="Escriba el nombre del autor" id='date' />
            </Form.Group>
          </Col>
          <Col sm={4} className=''>
          <Form.Group >
            <Form.Label>Categoría</Form.Label>
            <Form.Control as="select" defaultValue="Elegir..." id='category'>
              <option>Crítica</option>
              <option>Educación</option>
              <option>Difusión</option>
              <option>Investigación</option>
              <option>Otros</option>
            </Form.Control>
          </Form.Group>
          </Col>
        </Row>
        <Button variant="contained" color="primary" type="submit" className='SubmitBtn' >
          Filtrar
        </Button>
      </Form>
      <Row justify='center'>
        <Col>
          <Player
            src='https://www.youtube.com/watch?v=8_tMRvpzDVc'
            fluid={false}
            muted={true}
            width={850}
            height={485}
            startTime={14}
            autoPlay={true}
          >
            <BigPlayButton position='center' />
          </Player>
        </Col>
      </Row>
    </Container>
  )
}

export default Videos;
