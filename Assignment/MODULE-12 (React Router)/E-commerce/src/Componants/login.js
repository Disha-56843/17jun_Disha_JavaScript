import React from 'react'
import Icon from "../Assets/Icon.png";
import google from "../Assets/google.png";
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import Forgetpassword from './Forgetpassword';

export default function Login() {
  return (
    <div>
      <MDBContainer fluid>
        <div className="mt-5 text-center">
          <img src={Icon} alt='icon' className='img-fluid' /> <br />
        </div>
        <div className='mt-3 fs-4 text-center' style={{ color: "#223263" }}> Welcome back to E-Com! </div>
        <div className='mt-1 fs-4 text-center' style={{ color: "#848484" }}> Sign in to continue </div>

        <form>
          <div className='mx-auto mt-5 input-group w-50 border border-2'>
            <i className='bi bi-person mt-2 ms-2'></i>
            <input type="text" className='form-control border border-0' placeholder='Your Email/ Phone Number' />
          </div>
          <div className='mx-auto mt-3 input-group w-50 border border-2 mb-2'>
            <i className='bi bi-lock mt-2 ms-2'></i>
            <input type="text" className='form-control border border-0' placeholder='Password' />
          </div>
          <Link to={'/Forgetpassword'} style={{ textDecoration: "none", color: "#002482", marginLeft: "44%" }}>Forget Password?</Link><br />
          <input type="checkbox" style={{ marginLeft: "25%" }} /><span className='ms-2 ' style={{ color: "#848484" }}>Remember Me</span>
          <Link to={"/homepage"} className='form-control mt-5 pt-3 pb-3 border border-2 w-50 mx-auto text-white fs- text-center' style={{background:"#002482",textDecoration:"none"}}  type="submit" >Login</Link>
        </form>
        <div className='w-50 mx-auto mt-5' id='hr' style={{ textAlign: "center" }}>

          <hr class="seperat left" /><span className='fw-bold' style={{ color: "#848484" }}> OR </span>
          <hr class="seperat right" />
        </div>
        <div className='mt-5 fs-5 text-center text-dark'>Login Using</div>
        <div className='text-center mt-3 mx-auto'>
          <i className='bi bi-apple fs-1 ms-4' />
          <i className='bi bi-facebook fs-1 ms-5' style={{ color: "#2855a4" }} />
          <img src={google} alt='google' className='img-fluid ms-5'/>
        </div>
        <div className='text-center mt-4'>
          <span>Don't have a account?</span>
          <Link to={"/registerapp"}>Register</Link>
        </div>
      </MDBContainer>
    </div>
  )
}
