import React from 'react'
import { useParams } from 'react-router-dom'
import HomeLayout from '../Layouts/HomeLayout';
const CourseInfo = () => {
    let { id } = useParams();

  return (
   <HomeLayout>
       <h1 className='p-40 text-white '>{id}</h1>
   </HomeLayout>
  )
}

export default CourseInfo
