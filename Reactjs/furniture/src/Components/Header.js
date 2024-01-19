import React from 'react'
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import logo from "../Assets/Logo.png";

export default function Header() {
    return (
        <div>
            <MDBContainer fluid>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={logo} className='img-fluid' />
                    </div>
                    <div className='col-md-3 border border-bottom-2 border-start-0 border-end-0 border-top-0' style={{display:"flex"}}>
                        <div className='input-group'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='mt-2'>
                            <path d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 9.09938 14.0158 9.85792 13.7226 10.5657C13.4295 11.2734 12.9998 11.9164 12.4581 12.4581C11.9164 12.9998 11.2734 13.4295 10.5657 13.7226C9.85792 14.0158 9.09938 14.1667 8.33333 14.1667C7.56729 14.1667 6.80875 14.0158 6.10101 13.7226C5.39328 13.4295 4.75022 12.9998 4.20854 12.4581C3.66687 11.9164 3.23719 11.2734 2.94404 10.5657C2.65088 9.85792 2.5 9.09938 2.5 8.33333C2.5 6.78624 3.11458 5.30251 4.20854 4.20854C5.30251 3.11458 6.78624 2.5 8.33333 2.5C9.88043 2.5 11.3642 3.11458 12.4581 4.20854C13.5521 5.30251 14.1667 6.78624 14.1667 8.33333Z" stroke="#2F302C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input type='search' className='border border-0 ms-2' placeholder='Search something' />
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <ul>
                            <li>Home</li>
                            <li>
                                <select>
                                    <option></option>
                                </select>
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='col-md-2'>
                        <img src={logo} />
                    </div>
                </div>
            </MDBContainer>
        </div>
    )
}
