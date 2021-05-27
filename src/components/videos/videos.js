import {React,useEffect,useState} from 'react';
import { Container, Row, Col, Form,Card } from 'react-bootstrap';
import './videos.scss';
import Button from '@material-ui/core/Button';
import { DropdownButton, Dropdown } from 'react-bootstrap'
import ReactPlayer from 'react-player';
import axios from 'axios'

const Videos = () => {
  const url = 'http://localhost:8080/api/test'
  const urlAcceptedSubmissions = 'http://localhost:8080/api/submissions/accepted'

  const submit = (e)=>{
    axios.get(url)
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

  }

  //obtener accepted submissions al cargar la pagina
  const [submissions,setSubmissions] = useState([])


  useEffect(()=>{
    axios.get(urlAcceptedSubmissions)
    .then(res=>{
      console.log(res.data);
      setSubmissions(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  
  //refrescar submissions
  const refreshSubmissions = () => {
    axios.get(urlAcceptedSubmissions)
    .then(res => {
      // console.log(res);
      setSubmissions(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const renderCardData = () => {
    return submissions.map((submission,index)=>{
      const {id,type,title,author,category,abstract,videoLink} = submission
      if(type === 'Archivo'){
        return(
          <Card >
          <Card.Header as='h5'>{title}</Card.Header>
          <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Text>
              {abstract}
            </Card.Text>
            <Button variant="contained" color="primary" className='SubmitBtn'>Descargar PDF</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{category}</Card.Footer>
        </Card>
        )
      }
      else if(type === 'Video'){
        return (
          <Card>
          <Card.Header as='h5'>{title}</Card.Header>
          <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Text>
              {abstract}
            </Card.Text>
            <ReactPlayer url={videoLink}></ReactPlayer>
          </Card.Body>
          <Card.Footer className="text-muted">{category}</Card.Footer>
        </Card>
        )
      }
    })
  }
  // const renderTableData = () => {
  //   return submissions.map((submission,index)=>{
  //     const {id,type,title,author,category,abstract,videoLink} = submission
  //     if(type === 'Archivo'){
  //       return(
  //         <div>
  //           <tr>
  //           <td>{title}</td>
  //           <td>Descargar</td>
  //         </tr>
  //         <tr>
  //           <td>{author}</td>
  //           <td>{abstract}</td>
  //         </tr>
  //         </div>
  //       )
  //     }
  //     else if(type === 'Video'){
  //       return (
  //         <ReactPlayer url='https://www.youtube.com/watch?v=aSDAefhnTXQ'></ReactPlayer>
  //       )
  //     }
  //   })
  // }
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
         {/* <table>
           <tbody>
            {renderTableData()}
           </tbody>
         </table> */}
         {renderCardData()}
        </Col>
      </Row>
    </Container>
  )
}

export default Videos;
