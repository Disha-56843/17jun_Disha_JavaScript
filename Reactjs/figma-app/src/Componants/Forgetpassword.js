import React from 'react'
import Icon from "../Assets/Icon.png";
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';

export default function Forgetpassword() {
  return (
    <div>
        
      <MDBContainer fluid>
        <div className="mt-5 text-center">
          <img src={Icon} alt='icon' className='img-fluid' /> <br />
        </div>
        <div className='mt-3 fs-4 text-center' style={{ color: "#223263" }}> New Password </div>
        <div className='mt-1 fs-4 text-center' style={{ color: "#848484" }}><span className='text-danger'>*</span> We will send you a message to set or reset your new password </div>

        <form>
          <div className='mx-auto mt-5 input-group w-50 border border-2'>
            <i className='bi bi-person mt-2 ms-2'></i>
            <input type="text" className='form-control border border-0' placeholder='Your Email / Phone Number' />
          </div>
          
          <Link to={"/password_verification"} className='form-control mt-5 pt-3 pb-3 border border-2 w-50 mx-auto text-white fs- text-center' style={{background:"#002482",textDecoration:"none"}}  type="submit" >Send Varification</Link>
        </form>
      </MDBContainer>

    </div>
  )
}
