import React from 'react'
import Achievement from './CourseComponent/Achievement'
import Courses from './CourseComponent/Course.Path'
import ProgressBar from './CourseComponent/ProgressBar'
import WelcomeUser from './CourseComponent/WelcomeUser'

const index = () => {
  return (
    <>
    <WelcomeUser/>
    <Courses/>
    <ProgressBar/>
    <Achievement/>
    </>
  )
}

export default index