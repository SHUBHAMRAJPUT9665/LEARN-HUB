import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.auth?.data)
  const user = JSON.parse(userData)


  console.log(user)

  useEffect(() => {
  //  dispatch(getUserData())
  }, []);
  return (
    <>
    <div class="bg-gray-200 text-black font-sans h-screen w-full flex flex-row justify-center items-center">
  <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
     <img class="h-32  mx-auto rounded-full -mt-20 border-8 border-white" src={user?.avatar?.secure_url} alt=""/>
     <div class="text-center mt-2 text-3xl font-medium">{user.fullName}</div>
     <div class="text-center mt-2 font-light text-sm">{user?.email}</div>
     <div class="text-center font-normal text-lg">{user.role}</div>
     <div class="px-6 text-center mt-2 font-light text-sm">
       <p>
         
       </p>
     </div>
     <hr class="mt-8" />
     <div class="flex p-4">
       <div class="w-1/2 text-center m-2">
         <button>Change Password</button>
       </div>
       <div class="w-0 border border-gray-300">
         
       </div>
       <div class="w-1/2 text-center">
        Subscription: unActive
       </div>
     </div>
  </div>
</div>
    </>
  )
}

export default Profile
