import React from 'react'

const FeaturedItem = () => {
  return (
    <div>
      <div className="card m-2 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-6 p-0  my-2">
              <span className="CourseTitle"> Delhi Universtity </span>
              <span className="text-muted subtitle">Delhi</span>
              <br />
              <span className="text-muted subtitle">Fee :</span>
              <span className=" subtitle"> 60 K - 1 Lacs (Yearly)</span>{' '}
              <span className="text-muted subtitle">courses :</span>
              <span className=" subtitle"> 32 years</span>
            </div>
            <div className="col-lg-5  col-md-12 col-sm-12 col-6 d-flex flex-column justify-content-center align-items-center FetauredButton ">
              <button className="btn btn-outline-primary w-100 btn-sm my-2">
                Brochure
              </button>

              <button className="btn btn-primary w-100 btn-sm">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItem
