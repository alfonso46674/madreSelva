import { React, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import './home.scss';
import Client from '../../components/client/client';
import Developer2 from '../../components/developer2/developer2';

const HomePage = () => {
  const [user, setUser] = useState(1)

  return (
    <div className='HomePage'>
      <Navbar setUser={setUser} user={user}/>
      <div className='Title'>JPAR</div>
      {
        (user === 1) ? <Client/> : <Developer2/>
      }
    </div>
  )
}

export default HomePage;