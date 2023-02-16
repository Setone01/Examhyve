import React from 'react'
import Achievement from './CourseComponent/Achievement'
import Courses from './CourseComponent/Courses'
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