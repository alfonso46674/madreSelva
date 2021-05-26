import { React, useState, useEffect } from 'react';
import './admin.scss';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const Admin = () => {

  const urlSubmissions = 'http://localhost:8080/api/submissions/all'

  const [logged, setLogged] = useState(0)
  const [tryEmail, setTryEmail] = useState('')
  const [tryPass, setTryPass] = useState('')

  const email = 'madreselva.edu.art@gmail.com'
  const password = 'madreselva_password'

  const [submissions,setSubmissions] = useState([])

  useEffect(() => {
    setLogged(0)
    //obtener las submissions
    axios.get(urlSubmissions)
    .then(res => {
      console.log(res);
      setSubmissions(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])


  const onSubmit = (e) => {
    e.preventDefault();
    const writeEmail = document.getElementById('email').value
    const writePass = document.getElementById('password').value
    setTryPass(writePass);
    setTryEmail(writeEmail);
    console.log(email === writeEmail);
    if(email === writeEmail && password === writePass) setLogged(1)
    else setLogged(2)
  }

  const renderTableData = ()=>{
    return submissions.map((submission,index)=>{
      const {id,title,author,status,category,abstract} = submission
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{author}</td>
          <td><Button>{status}</Button></td>
          <td>{category}</td>
          <td >{abstract}</td>
          </tr>
      )
    })
  }

  const renderTableHeader = ()=>{
    return <tr>
        <th>ID</th>
        <th>Titulo</th>
        <th>Autor</th>
        <th>Status</th>
        <th>Categoría</th>
        <th>Resumen</th>
    </tr>
  }

  return (
    <Container className='AdminContainer' onSubmit={onSubmit}>
      <Form className='Admin-form'>
        <Row>
          <Col sm={5} className=''>
            <Form.Group >
              <Form.Label>Correo</Form.Label>
              <Form.Control type="text" placeholder="Escriba el correo del administrador" id='email' />
            </Form.Group>
          </Col>
          <Col sm={5} className=''>
            <Form.Group >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Escriba la contraseña de administrador" id='password' />
            </Form.Group>
          </Col>
          <Col sm={2} className=''>
            <Button variant="contained" color="primary" type="submit" className='SubmitBtn' >
              Entrar
            </Button>
          </Col>
        </Row>
      </Form>
      {
        logged === 1 ?
          <div>           
          <table className='submissionTable'>
            <tbody>
              {renderTableHeader()}
              {renderTableData()}
            </tbody>
          </table>
        </div>
          :
          logged === 2 ?
            <div>Usuario o contraseña incorrecta</div>
            :
            <span></span>
      }
    </Container>
  )
}

export default Admin