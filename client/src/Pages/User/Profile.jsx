import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.auth?.data)
  useEffect(() => {
   dispatch(getUserData())
  }, []);
  return (
    <div>
      <h1>Profile </h1>
    </div>
  )
}

export default Profile
