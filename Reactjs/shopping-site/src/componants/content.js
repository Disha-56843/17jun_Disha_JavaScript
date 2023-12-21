import React from 'react';
import {Container,Row} from 'react-bootstrap';
import Img1 from '../red_apple.jpg';
import Img2 from '../snack.jpeg';
import Img3 from '../vagetables.jpg' ;
import Img4 from '../strawberry.jpg';
import Img5 from '../black_plum.jpg';
import Img6 from '../custerd_apple.jpg';
import Img7 from '../coffee&tea.jpg';
import Img8 from '../headphones.jpg';
import Img9 from '../cake.jpg';
import Img10 from '../kiwi.jpg';

export default function Content() {
  return (
    <Container fluid>
    <Row>
      <div className='col-md-4'>
        <h2>Featured Categories</h2>
      </div>
      <div className='col-md-6 position-relative mt-2' id='footer-row'>
        <ul className="position-absolute">
            <li>Cake & Milk</li>
            <li>Coffes & Teas</li>
            <li style={{color:"#3bb77e"}}>Pet Foods</li>
            <li>Vegetables</li>
        </ul>
      </div>
      <div className='col-md-2'>
        <div className="ms-5">
          <span className="left-arrow fs-3"  ><i className="bi bi-arrow-left-circle"></i></span>
          <span className="right-arrow fs-3 ms-3" ><i className=" bi bi-arrow-right-circle"></i></span>
        </div>
      </div>
    </Row>
<center>
    <div className='card card1 position-relative text-center mt-3' style={{backgroundColor:"#feefea"}}>
      <a href=''><img src={Img1} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Red Apple</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>

    <div className='card card2 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#fff3eb"}}>
      <a href=''><img src={Img2} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Snacks</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>

    <div className='card card3 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#fff3ff"}}>
      <a href=''><img src={Img3} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Vegetables</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>

    <div className='card card4 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#f2fce4"}}>
      <a href=''><img src={Img4} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Strawberry</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>

    <div className='card card5 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#feefea"}}>
      <img src={Img5} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Black plum</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span>
    </div>

    <div className='card card6 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#fffceb", width:"9%"}}>
      <a href=''><img src={Img6} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Custard apple</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>

    <div className='card card7 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#feefea"}}>
      <a href=''><img src={Img7} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Coffee & Tea</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>

    <div className='card card8 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#ecffec"}}>
      <a href=''><img src={Img8} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2'id='tt' style={{color:"#253d4e"}}>Headphone</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>

    <div className='card card9 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#f2fce4"}}>
      <a href=''><img src={Img9} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2' id='tt' style={{color:"#253d4e"}}>Cake & Milk</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>

     <div className='card card10 position-relative text-center mt-3 ms-3' style={{backgroundColor:"#fffceb"}}>
      <a href=''><img src={Img10} alt='' className='positive-absolute' id='crt' />
      <h6 className='mt-2' id='tt' style={{color:"#253d4e"}}>Organic Kiwi</h6>
      <span style={{color:"#7e7e7e"}}>24 items</span></a>
    </div>
    </center>
    <hr style={{color:"grey"}} />
  </Container>
  )
}
