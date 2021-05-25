import React from 'react';
import './footer.scss';
import {MDBCol,MDBContainer,MDBRow,MDBFooter} from 'mdbreact';

// https://mdbootstrap.com/docs/react/navigation/footer/

const Footer = ()=>{
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contacto</h5>
            <p>
              Para comentarios, quejas y sugerencias favor de mandar un mensaje al siguiente correo:
            </p>
            <p>
                <b>madreselva.edu.art@gmail.com</b>
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Redes sociales</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/madreselva.edu.art">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/madreselva.mexico/">Instagram</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://madreselva.ddns.net"> madreselva.ddns.net </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    );
}

export default Footer