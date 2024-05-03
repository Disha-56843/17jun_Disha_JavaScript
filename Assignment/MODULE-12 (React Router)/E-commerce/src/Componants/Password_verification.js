import React from 'react'
import Icon from "../Assets/Icon.png";
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';

export default function Password_verification() {
  return (
    <div>
<MDBContainer fluid style={{marginTop:"10%"}}>
        
        <div className='mt-3 fs-4 text-center' style={{ color: "#223263" }}> New Password </div>
        <div className='mt-1 fs-4 text-center' style={{ color: "#848484" }}><span className='text-danger'>*</span> We will send you a message to set or reset your new password </div>

        <form>
          <div className='mx-auto mt-5 input-group w-50 border border-2'>
            <input type="password" className='form-control border border-0' placeholder='Enter OTP here' />
          </div>
          
          <Link to={"/newpassword"} className='form-control mt-5 pt-3 pb-3 border border-2 w-50 mx-auto text-white fs- text-center' style={{background:"#002482",textDecoration:"none"}}  type="submit" >Confirm</Link>
        </form>
      </MDBContainer>
    </div>
  )
}
