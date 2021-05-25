import React from 'react';
import Uploads from '../../components/uploads/uploads';
import Navbar from '../../components/navbar/navbar';
import './uploads.scss'

const UploadsPage = () => {
  return(
    <div className='Uploads'>
      <Navbar/>
      <div className='Title'>MADRESELVA</div>
      <div className='Subtitle'>Ecosistema de educación artística</div>
      <Uploads/>
    </div>
  )
}

export default UploadsPage;