import {React,useEffect,useState} from 'react';
import { Container, Row, Col, Form,Card } from 'react-bootstrap';
import './videos.scss';
import Button from '@material-ui/core/Button';
import FileDownload from 'js-file-download'
import ReactPlayer from 'react-player';
import axios from 'axios'

const Videos = () => {
  const urlAcceptedSubmissions = 'http://localhost:8080/api/submissions/accepted'
  const urlSearchAcceptedSubmissions = 'http://localhost:8080/api/submissions/search'
  const urlDownloadFile = 'http://localhost:8080/api/files/download?id='
 

  //obtener accepted submissions al cargar la pagina
  const [submissions,setSubmissions] = useState([])


  useEffect(()=>{
    axios.get(urlAcceptedSubmissions)
    .then(res=>{
      // console.log(res.data);
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
            {/* Poner el id y ocultarlo para asi poder accesarlo desde un event trigger, que seria el boton de descarga */}
            <p hidden>{id}</p>
            <Card.Title>{author}</Card.Title>
            <Card.Text>
              {abstract}
            </Card.Text>
            <Button onClick={downloadPDF} variant="contained" color="primary" className='SubmitBtn'>Descargar PDF</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{category}</Card.Footer>
        </Card>
        )
      }
      else if(type === 'Video'){
        return (
          <Card className='card'>
          <Card.Header as='h5'>{title}</Card.Header>
          <Card.Body>
            <p hidden>{id}</p>
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

  const downloadPDF = (e) =>{
    let eventId = e.target.parentElement.parentElement.firstChild.innerHTML

    let titleEvent = e.target.parentElement.parentElement.previousSibling.innerHTML

    axios({
      url:urlDownloadFile+eventId,
      method:'GET',
      responseType:'blob'
    })
    .then(res => {
      console.log(res);
      //download file to browser
      FileDownload(res.data,`${titleEvent}.pdf`)
      //https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios
    })
    .catch(err => {
      console.log(err);
    })
  }



  //search data
  const [searchData,setData] = useState({
    author:'',
    title:'',
    category:''
  })
  
  const setSearchData = (e)=>{
    const newData = {...searchData}
    newData[e.target.id] = e.target.value
    setData(newData)
  }
  //buscar accepted submissions
  const searchSubmissions =(e)=>{
    e.preventDefault()
    console.log(searchData)

    axios.post(urlSearchAcceptedSubmissions,{
      author:searchData.author,
      title: searchData.title,
      category: searchData.category
    })
    .then(res =>{
      setSubmissions(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <Container className='VideosContainer'>
      <Form className='VideosForm'>
        <Row>
          <Col sm={4} className=''>
            <Form.Group >
              <Form.Label>Filtrar por título</Form.Label>
              <Form.Control onChange={(e)=>setSearchData(e)} type="text" placeholder="Escriba el título que quiera buscar" id='title' />
            </Form.Group>
          </Col>
          <Col sm={4} className=''>
            <Form.Group >
              <Form.Label>Filtrar por autor</Form.Label>
              <Form.Control onChange={(e)=>setSearchData(e)} type="text" placeholder="Escriba el nombre del autor" id='author' />
            </Form.Group>
          </Col>
          <Col sm={4} className=''>
          <Form.Group >
            <Form.Label>Categoría</Form.Label>
            <Form.Control onChange={(e)=>setSearchData(e)} as="select" defaultValue="" id='category'>
              <option>Ninguna</option>
              <option>Crítica</option>
              <option>Educación</option>
              <option>Difusión</option>
              <option>Investigación</option>
              <option>Otros</option>
            </Form.Control>
          </Form.Group>
          </Col>
        </Row>
        <Button variant="contained" color="primary" type="submit" className='SubmitBtn' onClick={searchSubmissions} >
          Filtrar
        </Button>
      </Form>
      <Row justify='center'>
        <Col>
         {renderCardData()}
        </Col>
      </Row>
    </Container>
  )
}

export default Videos;
