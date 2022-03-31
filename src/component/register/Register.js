import React from 'react'
import './register.css'
import { MdOutlineEmail } from 'react-icons/md'
const Register = () => {
  return (
    <div className="register my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-6 registertxt d-flex  flex-column justify-content-center">
            {' '}
            <div className="container">
              <p>REGISTER FOR FREE NEWSLETTER !</p>
              <span>
                {' '}
                Never miss out important registrations update and opportunities
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-6 d-flex  flex-column justify-content-center mobMargin">
            <div className="inputEmail d-flex align-items-center">
              <MdOutlineEmail className="ms-3" />
              <button className="btn btn-primary btn-sm ">
                Keep me updated
              </button>
              <input type="text" placeholder="Enter Your Email Address" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
