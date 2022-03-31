import React from 'react'
import image from './virtualTourImg.png'
import { FaRegCommentAlt } from 'react-icons/fa'
const VirtualToure = () => {
  return (
    <div className="col-lg-3 my-3">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-text VirtualTitle">Delhi University</div>
          <span className="text-muted subtitle">
            <FaRegCommentAlt /> 582
          </span>
          <span className="text-muted subtitle mx-2"> 614 Views</span>
        </div>
      </div>
    </div>
  )
}

export default VirtualToure
