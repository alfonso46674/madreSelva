import { React, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import './videos.scss';
import Videos from '../../components/videos/videos';

const VideosPage = () => {
  const [user, setUser] = useState(1)

  return (
    <div className='Videos'>
      <Navbar/>
      <div className='Title'>MADRE SELVA</div>
      <Videos/>
    </div>
  )
}

export default VideosPage;