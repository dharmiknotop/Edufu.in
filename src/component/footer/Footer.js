import React from 'react'
import './Footer.css'
import image from './FooterText.png'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 col-6 ">
          <div className="text-primary FooterTitle">
            <img src={image} alt="" />
          </div>
          <p className="text-muted FooterText mt-2">
            Edufu stands for education and future. We aim to provide mutual
            benefits to the students, institutions, companies, and job seekers.
            Edufu doesn't exist for its own sake, but for yours.
          </p>
          <div className="Icons">
            <AiOutlineTwitter className="text-muted my-2 me-4" size={20} />
            <AiFillFacebook className="text-muted my-2 me-4" size={20} />
            <TiSocialInstagram className="text-muted my-2 me-4" size={20} />
            <AiFillLinkedin className="text-muted my-2 me-4" size={20} />
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 col-6 ">
          {' '}
          <div className="FooterTitle text-muted">Services</div>
          <div className="d-flex flex-column text-muted">
            <span className="Footertext my-1">Stundents</span>
            <span className="Footertext my-1 ">Institue</span>
            <span className="Footertext my-1">Company</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 ">
          {' '}
          <div className="FooterTitle text-muted">DOCUMENTATION</div>
          <div className="d-flex flex-column text-muted">
            <span className="Footertext my-1">Term & condition</span>
            <span className="Footertext my-1">Privacy Policy</span>
            <span className="Footertext my-1">Disclaimer</span>
            <span className="Footertext my-1">Refund policy</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 ">
          {' '}
          <div className="FooterTitle text-muted">CONTACT US</div>
          <div className="d-flex flex-column text-muted">
            <span className="Footertext my-1">
              Edufu Technologies Pvt. Ltd.
            </span>
            <span className="Footertext my-1">www.Edufu.in</span>
            <span className="Footertext my-1">Admin@Edufu.in</span>
            <span className="Footertext my-1">
              25, 1st main road, KB nagar, Bengaluru, karnataka 560026
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
