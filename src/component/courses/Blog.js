import React from 'react'
import mask from './Mask.png'
const blog = () => {
  return (
    <div className="col-12 col-md-12 col-sm-12 col-lg-6 my-2">
      <div className="row">
        <div className="col-6">
          <img className="w-100 h-100" src={mask} alt="" />
        </div>
        <div className="col-6 d-flex flex-column justify-content-between">
          <span className="VirtualTitle blogtxt">
            {' '}
            There Will Never be a Creator Middle Class and Why ...
          </span>
          <div className="d-flex justify-content-between BlogViews ">
            <span className="text-muted d-flex align-items-center">
              556 Views
            </span>
            <span className="CreateEconomy">Create Economy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default blog
