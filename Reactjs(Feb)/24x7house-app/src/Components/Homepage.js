import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';


export default function Homepage() {
  return (
    <>
        <Container fluid className='header'>
        <Header />
        <Container>
          <div className='row'>
            <div className='col-md-6'>
              <h6 className='text-lightgreen'>Tempatnya sewa apartemen terbaik di indonesia</h6>
              <h1 className='text-white w-75'>Ayo, <span className='text-lightgreen'>Cari</span> Apartemen Impian <span className='text-lightgreen'> Anda  Disini.. </span></h1>
              <p className='text-white' style={{width:"80%"}}>Rumah Impian Anda, Hanya Satu Klik Jauhnya: Temukan Kenyamanan dalam Setiap Apartemen Di Indoensia.</p>
              <button></button>
              <button></button>
            </div>
            <div className='col-md-6'></div>
          </div>
        </Container>
        </Container>
    </>
  )
}
