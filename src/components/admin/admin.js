import { React, useState, useEffect } from 'react';
import './admin.scss';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';


const Admin = () => {


  const [logged, setLogged] = useState(0)
  const [tryEmail, setTryEmail] = useState('')
  const [tryPass, setTryPass] = useState('')

  const email = 'madreselva.edu.art@gmail.com'
  const password = 'madreselva_password'

  useEffect(() => {
    setLogged(0)
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
          <div>Logged</div>
          :
          logged === 2 ?
            <div>Not Logged try again</div>
            :
            <span></span>
      }
    </Container>
  )
}

export default Admin