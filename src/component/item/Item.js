import React from 'react'
import './Item.css'
import image from './second.png'
import Firstimage from './firstImg.png'
import { HiDownload } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import { IoLogoYoutube } from 'react-icons/io'
const Item = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
      <div className="card">
        <div className="position-relative">
          <div className="featured"> featured</div>
          <div className="rating d-flex align-items-center">
            {' '}
            <span className="me-1">4.0 </span>
            <AiFillStar />
          </div>
          <div className="position-relative">
            <img src={Firstimage} className="card-img-top" />
            <IoLogoYoutube className="Youtube" size={20} color="red" />
            <div className="overlay"></div>
          </div>
          <p>
            <span className="pe-1">Maharishi Dayanand Univers...</span>
            <span className="d-flex align-items-center mt-1">
              <ImLocation className="mx-1" size={10} />
              Delhi Bypass, Rohtak, Haryana
            </span>
          </p>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-end mb-2 pe-1 position-relative ">
            <img className="ItemImg" src={image} alt="" />
            <AiOutlineHeart size={20} />
          </div>
          <div className="ItemsDetails pb-2">
            <div className="border-right dividerow ">
              {' '}
              <span className="text-secondary  "> Average yearly Fee</span>{' '}
              <span className=" text-center"> ₹ 8k-72k</span>
            </div>{' '}
            <div className="border-right dividerow  ">
              {' '}
              <span className="text-secondary ">Available courses</span>{' '}
              <span className=" text-center"> 30 courses</span>
            </div>
            <div className="dividerow ">
              <span className="text-secondary"> Rank</span>{' '}
              <span className="text-center"> 85</span>
            </div>
          </div>
          <div className="d-flex justify-content-around mt-3 ">
            {' '}
            <a href="#" className="btn btn-outline-primary mx-2 btn-sm Apply">
              <div className="d-flex justify-content-center align-items-center">
                <HiDownload className="m-2" /> Brochure
              </div>
            </a>
            <a
              href="#"
              className="btn btn-primary mx-2 btn-sm Apply d-flex justify-content-center align-items-center"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
