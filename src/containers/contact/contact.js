import React from 'react';
import Contact from '../../components/contact/contact';
import Navbar from '../../components/navbar/navbar';
import './contact.scss'

const ContactPage = () => {
  return(
    <div className='Contact'>
      <Navbar/>
      <div className='Title'>MADRE SELVA</div>
      <Contact/>
    </div>
  )
}

export default ContactPage;