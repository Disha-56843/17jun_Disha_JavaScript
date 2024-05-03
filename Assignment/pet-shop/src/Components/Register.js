import React from 'react'

export default function Register() {
  return (
    <div><section id="register">
    <div className="container ">
        <div className="row my-5 py-5">
            <div className="offset-md-3 col-md-6 my-5 ">
                <h2 className="display-3 fw-normal text-center">Get 20% Off on <span className="text-primary">first Purchase</span>
                </h2>
                <form>
                    <div className="mb-3">
                        <input type="email" className="form-control form-control-lg" name="email" id="email"
                            placeholder="Enter Your Email Address" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control form-control-lg" name="email" id="password1"
                            placeholder="Create Password" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control form-control-lg" name="email" id="password2"
                            placeholder="Repeat Password" />
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-dark btn-lg rounded-1">Register it now</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section></div>
  )
}
