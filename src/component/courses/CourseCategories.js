import React from 'react'

const CourseCategories = ({ Name }) => {
  return (
    <div className="col-lg-2 my-2 ">
      {' '}
      <span className="list-group-item p-1 d-flex justify-content-center Field">
        {Name}
      </span>
    </div>
  )
}

export default CourseCategories
