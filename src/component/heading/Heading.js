import React from 'react'
import './heading.css'
const Heading = ({ heading }) => {
  return (
    <div className="heading py-4 d-flex align-items-center ">
      <span className="headingTxt"> {heading}</span>
      <button className="btn btn-outline-primary ms-4 px-4"> View All</button>
    </div>
  )
}

export default Heading
