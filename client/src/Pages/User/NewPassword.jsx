import React from 'react'
import { useParams } from 'react-router-dom'
const NewPassword = () => {
    const {resetPasswordURL}  = useParams();

    console.log(resetPasswordURL)
  return (
    <div>
      <h1 className='text-3xl text-center text-black font-semibold'>New Password</h1>
    </div>
  )
}

export default NewPassword
