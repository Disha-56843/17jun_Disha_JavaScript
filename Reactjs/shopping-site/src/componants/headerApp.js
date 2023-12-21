import React from 'react'
import { Row, select, option } from "react-bootstrap"

export default function HeaderApp() {
    return (
        <div className='p-3 shadow '>
            <div className='row'>

                <span className='col-md-4'>
                    <span className=''> About us </span>
                    <span className='ms-1'> My Account </span>
                    <span className='ms-1'> Wishlist </span>
                    <span className='ms-1'> Order Tracking </span>

                </span>

                <span className='col-md-4'>
                    <span> Get great products up to 50% off </span>
                    <span className='text-green-500 ms-2'> View Details </span>


                </span>

                <span className='col-md-4'>
                    <span> Need Help? </span>
                    <span className='ms-1'> Call us </span>
                    <span className='text-green-500 ms-2'> 1800 900 </span>
                    <select className='border border-0 ms-1'>
                        <option>English</option>
                    </select>
                    <select className='border border-0 ms-1'>
                        <option>$USD</option>
                    </select>

                </span>

            </div>

        </div>
    )
}
