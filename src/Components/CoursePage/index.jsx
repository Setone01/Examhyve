import React from 'react'
import Courses from './CourseComponent/Courses'
import ProgressBar from './CourseComponent/ProgressBar'
import WelcomeUser from './CourseComponent/WelcomeUser'

const index = () => {
  return (
    <>
    <WelcomeUser/>
    <Courses/>
    <ProgressBar/>
    </>
  )
}

export default index