import { React } from 'react'; //Use effect used on load
import './uploads.scss';
import { Container,Row,Col,Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const Uploads = () => {

    // Passes the info from the form to the newData JSON
    const myFunction = (e) => {
      // const newData = { ...data }
      // newData[e.target.id] = e.target.value
      // setData(newData)
    }


  return (
    <Container className='UploadsContainer'>
      <Row>
        <Col>
        <h1  className='titles'>Criterios de publicación</h1>
        <ul>
          <li>
            <p>Al ser una plataforma especializada en contenidos de <b>arte y cultura</b> es necesario que los trabajos académicos que soliciten publicación tengan que ver con estos temas.</p>
          </li>

          <li>
            <p>Los lineamientos de formato requerido para los documentos son los siguientes:</p>
              <ul>
                <li>
                  <p>Formato PDF</p>
                </li>
                <li>
                  <p>Tamaño carta</p>
                </li>
                <li>
                  <p>Portada del documento con título del trabajo, nombre del autor y logos pertinentes del proyecto</p>
                </li>
                <li>
                  <p>Títulos en Arial Negrita tamaño 16</p>
                </li>
                <li>
                  <p>Subtítulos en Arial tamaño 14</p>
                </li>
                <li>
                  <p>Contenido en Arial tamaño 12</p>
                </li>
                <li>
                  <p>Interlineado 1.5</p>
                </li>
                <li>
                  <p>Márgenes a 2.5 cm por los cuatro lados</p>
                </li>
                <li>
                  <p>Párrafo justificado</p>
                </li>
              </ul>
          </li>

          <li>
            <p>Si se desean subir dos o más trabajos académicos a revisión para su publicación se deberá rellenar la solicitud aquí presentada varias veces (una vez por cada trabajo).</p>
          </li>

          <li>
            <p>Si tu trabajo académico es en formato audiovisual, o meramente audio, es necesario que primero lo subas a la plataforma de streaming Youtube, para que cuando rellenes la solicitud de publicación únicamente adjuntes el link de dicho material.</p>
          </li>

          <li>
            <p>Además del trabajo académico, se requerirán los siguientes elementos en la solicitud: Breve abstract del trabajo, nombre completo del autor, título del trabajo, última fecha de edición de éste y la carta de uso de contenidos.</p>
          </li>

          <li>
            <p>Te pedimos atentamente que antes de someter tu trabajo a revisión para publicación lo leas varias veces y le hagas las correcciones pertinentes, esto con la intención de que todos los contenidos presentados en la plataforma sean de la mayor calidad posible.</p>
          </li>

          <li>
            <p>Antes de proceder te pedimos que descargues la carta de uso de contenidos que estará disponible aquí debajo, para que la adjuntes en formato PDF en la solicitud de publicación con los datos requeridos en ella (es esencial que tenga firma y nombre).</p>
          </li>
        </ul>
        
        </Col>
        <Col>
        <h1 className='titles'>Formularios de publicación</h1>

        <h2>Publicar un documento PDF</h2>
        <Form className='ClientForm'>
          <Form.Group >
            <Form.Label>Título</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} type="text" placeholder="Ingrese el título del documento" id='title' />
          </Form.Group>
          <Form.Group >
            <Form.Label>Autor</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} type="text" placeholder="Ingrese el nombre completo del autor" id='author' />
          </Form.Group>
          <Form.Group >
            <Form.Label>Categoría</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} as="select" defaultValue="Elegir..." id='category'>
              <option>Crítica</option>
              <option>Educación</option>
              <option>Difusión</option>
              <option>Investigación</option>
              <option>Otros</option>
            </Form.Control>
          </Form.Group>
          <Form.Group >
            <Form.Label>Abstracto</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} as="textarea" placeholder="Ingrese un pequeño abstracto acerca del documento o video" id='abstract' />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Documento PDF</Form.Label>
            <Form.File required onChange={(e) => myFunction(e)}  id='document' />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Carta de uso de contenidos</Form.Label>
            <Form.File required onChange={(e) => myFunction(e)}  id='agreement' />
          </Form.Group>
          
          <Button variant="contained" color="primary" type="submit" className='SubmitBtn' >
            Submit
        </Button>
        </Form>
                
        <div>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
        </div>

        <h2>Publicar un video</h2>
        <Form className='ClientForm'>
          <Form.Group >
            <Form.Label>Título</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} type="text" placeholder="Ingrese el título del documento" id='title' />
          </Form.Group>
          <Form.Group >
            <Form.Label>Autor</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} type="text" placeholder="Ingrese el nombre completo del autor" id='author' />
          </Form.Group>
          <Form.Group >
            <Form.Label>Categoría</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} as="select" defaultValue="Elegir..." id='category'>
              <option>Crítica</option>
              <option>Educación</option>
              <option>Difusión</option>
              <option>Investigación</option>
              <option>Otros</option>
            </Form.Control>
          </Form.Group>
          <Form.Group >
            <Form.Label>Abstracto</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} as="textarea" placeholder="Ingrese un pequeño abstracto acerca del documento o video" id='abstract' />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Video link</Form.Label>
            <Form.Control required onChange={(e) => myFunction(e)} type="text" placeholder="Ingrese el link al video" id='videoLink' />
          </Form.Group>
          
          <Form.Group >
            <Form.Label>Carta de uso de contenidos</Form.Label>
            <Form.File required onChange={(e) => myFunction(e)}  id='agreement' />
          </Form.Group>
          
          <Button variant="contained" color="primary" type="submit" className='SubmitBtn' >
            Submit
        </Button>
        </Form>


        </Col>
      </Row>
    </Container>
  )
}

export default Uploads;