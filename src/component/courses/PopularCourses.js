import React from 'react'

const PopularCourses = ({ Name }) => {
  return (
    <div className="col-lg-4 my-2 position-relative ">
      {' '}
      <span class="list-group-item p-3 pt-2 ">
        <span className="VirtualTitle">{Name}</span>
        <div className="subtitle text-muted">3 courses offered</div>
        <div className="subtitle my-1">
          Fee : <span className=" subtitle"> 60 K - 1 Lacs (Yearly)</span>
        </div>

        <button className="btn btn-outline-primary PopularCoursesBtn btn-sm m-2 mt-2">
          Short list
        </button>
      </span>
    </div>
  )
}

export default PopularCourses
