import { React } from 'react';
import Navbar from '../../components/navbar/navbar';
import './videos.scss';
import Videos from '../../components/videos/videos';

const VideosPage = () => {

  return (
    <div className='Videos'>
      <Navbar/>
      <div className='Title'>MADRESELVA</div>
      <div className='Subtitle'>Ecosistema de educación artística</div>
      <Videos/>
    </div>
  )
}

export default VideosPage;