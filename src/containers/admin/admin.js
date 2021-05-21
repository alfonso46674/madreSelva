import React from 'react';
import Admin from '../../components/admin/admin';
import Navbar from '../../components/navbar/navbar';
const AdminPage = () => {
  return(
    <div className='Admin'>
      <Navbar/>
      <div className='Title'>MADRE SELVA</div>
      <Admin/>
    </div>
  )
}

export default AdminPage;