import { React, useState, useEffect } from 'react';
import './admin.scss';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Modal from 'react-modal';
import FileDownload from 'js-file-download'

const Admin = () => {

  const urlSubmissions = 'http://localhost:8080/api/submissions/all'
  const urlChangeStatus = 'http://localhost:8080/api/submissions/status'
  const urlDownloadFile = 'http://localhost:8080/api/files/download?id='
  const urlDownloadAgreement = 'http://localhost:8080/api/files/agreement?id='
  
  const [logged, setLogged] = useState(0)
  const [tryEmail, setTryEmail] = useState('')
  const [tryPass, setTryPass] = useState('')

  const email = 'madreselva.edu.art@gmail.com'
  const password = '1'
  // const password = 'madreselva_password'

  const [submissions,setSubmissions] = useState([])

  useEffect(() => {
    setLogged(0)
    //obtener las submissions
    axios.get(urlSubmissions)
    .then(res => {
      // console.log(res);
      setSubmissions(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  //refrescar submissions
  const refreshSubmissions = () => {
    axios.get(urlSubmissions)
    .then(res => {
      // console.log(res);
      setSubmissions(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  //manejo del modal que se mostrara para cambiar status
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(e) {
    e.preventDefault()
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px'
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const writeEmail = document.getElementById('email').value
    const writePass = document.getElementById('password').value
    setTryPass(writePass);
    setTryEmail(writeEmail);
    // console.log(email === writeEmail);
    if(email === writeEmail && password === writePass) setLogged(1)
    else setLogged(2)
  }

    //render table information
    const renderTableHeader = ()=>{
      return <tr>
          <th>ID</th>
          <th>Tipo</th>
          <th>Carta</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Status</th>
          <th>Categoría</th>
          <th>Resumen</th>
      </tr>
    }

  const renderTableData = ()=>{
    return submissions.map((submission,index)=>{
      const {id,type,title,author,status,category,abstract} = submission
      return (
        <tr key={id}>
          <td id='id'>{id}</td>
          <td><Button onClick={DownloadDocuments}>{type}</Button></td>
          <td><Button onClick={DownloadAgreement}>Descargar</Button></td>
          <td>{title}</td>
          <td>{author}</td>
          <td><Button onClick={obtainIdAndOpenModal}>{status}</Button></td>
          <td>{category}</td>
          <td >{abstract}</td>
          </tr>
      )
    })
  }
  
  //abre una ventana del navegador con el video, o descarga el archivo pdf
  const DownloadDocuments = (e)=>{
     //row where the event was created
     let trEvent = e.target.parentElement.parentElement.parentElement;
     //obtain the id related to the event row
     let idEvent = trEvent.firstChild.innerHTML
    //  console.log(idEvent);
    //title of the submission
    let titleEvent = trEvent.children[3].innerHTML
    // console.log(titleEvent);    
    if(e.target.innerHTML === 'Archivo'){
      let urlDownloadFileById = urlDownloadFile + idEvent
      axios({
        url:urlDownloadFileById,
        method: 'GET',
        responseType: 'blob' // important for fileDownloader
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
    else if(e.target.innerHTML === 'Video'){
      console.log('video')
    }
  }

  const DownloadAgreement = (e) => {
    //row where the event was created
    let trEvent = e.target.parentElement.parentElement.parentElement;
    //obtain the id related to the event row
    let idEvent = trEvent.firstChild.innerHTML

    let titleEvent = trEvent.children[3].innerHTML

    let urlDownloadAgreementById = urlDownloadAgreement + idEvent
    axios({
      url:urlDownloadAgreementById,
      method: 'GET',
      responseType: 'blob' // important for fileDownloader
    })
    .then(res => {
      console.log(res);
      //download file to browser
      FileDownload(res.data,`${titleEvent}_cartaUso.pdf`)
      //https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  //data to send to update status submission
  const [data,setData] = useState({
    id:'',
    status:''
  })

  //insert id in data state for further access
  const insertIdInData = (idValue) => {
    const newData = {...data}
    newData['id'] = idValue
    setData(newData)
  }

  //insert status in data
  const insertData = (e) => {
    const newData = {...data}
    newData['status'] = e.target.value
    setData(newData)
    // console.log(newData);
  }

  //modal handling
  const renderStatusModal = () => {
    return <Modal 
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    >
      <Container onSubmit={submitStatusChange} className='AdminContainer'>
        <Form className='Admin-form'>
        <Form.Group >
            <Form.Label>Status</Form.Label>
            {/* <Form.Control required onChange={(e) => myFunction(e)} as="select" defaultValue="Elegir..." id='status'> */}
            <Form.Control onChange={(e)=> insertData(e)} required as="select" defaultValue="Elegir..." id='status'>
              <option>Elegir...</option>
              <option>Pending</option>
              <option>Accepted</option>
              <option>Rejected</option>
            </Form.Control>
          </Form.Group>
          <Button variant="contained" color="primary" type="submit" className='SubmitBtn' >
              Submit
            </Button>
        </Form>
      </Container>
    </Modal>
  }

  const obtainIdAndOpenModal = (e)=>{
        //row where the event was created
        let trEvent = e.target.parentElement.parentElement.parentElement;
        //obtain the id related to the event row
        let idEvent = trEvent.firstChild.innerHTML
        // console.log(idEvent);

        //insert the id from the row event in the globalId
        insertIdInData(idEvent);
        // console.log('data after entering id',data);
         openModal(e)
  }

  //postear los cambios al momento de hacer un submit en el modal
  const submitStatusChange = (e)=>{
    e.preventDefault()
    console.log('axiosData',data)
   axios.put(urlChangeStatus,{
     id:data.id,
     status: data.status
   })
   .then(res=>{
     console.log(res);
   })
   .catch(err => {
     console.log(err);
   })
    //close modal
    closeModal()
  }

  return (
    <Container className='AdminContainer' onSubmit={onSubmit}>
      {/* renderizar el modal en caso de que se quiera cambiar el status*/}
      {renderStatusModal()}
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
            <div>
            <Button className='SubmitBtn' color='primary' variant='contained' onClick={refreshSubmissions}>Refrescar elementos</Button>
            <span></span>
            </div>           
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