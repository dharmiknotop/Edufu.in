import React from 'react'
import './Courses.css'
import { FiArrowRight } from 'react-icons/fi'
import FeaturedItem from './FeaturedItem'
import CourseCategories from './CourseCategories'
import CourseCategorieslname from './CourseCategorieslname'
import VirtualToure from './VirtualToure'
import PopularCourses from './PopularCourses'
import Blog from './Blog'
const Courses = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-6">
          <div className="card">
            <div className="d-flex align-items-center pt-4 pb-2 ">
              <div className="featuredOptions d-flex align-items-end">
                <span className="ms-3  d-flex align-items-end ">
                  Featured Insitutes
                </span>
                <div className="ViewAll text-primary d-flex align-items-center ms-4">
                  <span> View all </span>

                  <FiArrowRight />
                </div>
              </div>
            </div>
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 col-6">
          <div className="card">
            <div className="container">
              <div className="CoursesTitle"> Courses / Degree</div>
              <div className="conatiner">
                <div className="row">
                  <CourseCategories Name="B.Tech" />
                  <CourseCategories Name="M.Tech" />
                  <CourseCategories Name="BCA" />
                  <CourseCategories Name="MCA" />
                  <CourseCategories Name="B.A" />
                  <CourseCategories Name="M.A" />
                  <CourseCategories Name="BBA" />
                  <CourseCategorieslname Name="Fashion Deisgning" />
                  <CourseCategories Name="B.Sc" />
                  <CourseCategories Name="B.Pharm" />
                  <CourseCategories Name="M.pharm" />
                  <CourseCategories Name="M.phill" />
                </div>
              </div>
              <div className="CoursesTitle  ">Virtual Tour</div>
              <div className="row">
                <VirtualToure />
                <VirtualToure />
                <VirtualToure />
                <VirtualToure />
                <VirtualToure />
              </div>
              <div className="CoursesTitle"> Popular Courses</div>
              <div className="row">
                <PopularCourses Name={'M.A'} />
                <PopularCourses Name={'M.A'} />
                <PopularCourses Name={'M.A'} />
                <PopularCourses Name={'M.A'} />
                <PopularCourses Name={'M.A'} />
              </div>
              <div className="CoursesTitle"> Blog of the week</div>
              <div className="row">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
