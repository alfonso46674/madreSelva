import { React } from 'react';
import Navbar from '../../components/navbar/navbar';
import './videos.scss';
import Videos from '../../components/videos/videos';

const VideosPage = () => {

  return (
    <div className='Videos'>
      <Navbar/>
      <div className='Title'>MADRE SELVA</div>
      <Videos/>
    </div>
  )
}

export default VideosPage;