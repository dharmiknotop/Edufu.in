import React from 'react'
import image from './ItemOptionImg.png'
const HomeItem = () => {
  return (
    <>
      {' '}
      <div className="container my-4 MainContainer  ">
        <div className="HomeItem">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center">
              <img className="HomeItemImg" src={image} alt="" />
            </div>
            <div className="col-lg-8 d-flex  flex-column justify-content-center">
              <div className="Details">
                <p>Come to class with me !</p>
                <span className="text-muted">Delhi University, Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  )
}

export default HomeItem
