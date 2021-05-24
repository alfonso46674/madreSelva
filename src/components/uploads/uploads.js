import { React } from 'react'; //Use effect used on load
import './uploads.scss';
import { Container,Row,Col } from 'react-bootstrap';

const Uploads = () => {

  return (
    <Container className='UploadsContainer'>
      <Row>
        <Col className='titleCriteria'>
        <h1>Criterios de publicación</h1>
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
        <Col>Teest2</Col>
      </Row>
    </Container>
  )
}

export default Uploads;