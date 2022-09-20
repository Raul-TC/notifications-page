import React from 'react'

const Notification = ({username,date,perfilImage,notificationContent,post,notificationGroup,notificationMessage,message,notificationPicture,notificationPictureUrl,newNotification,notificationCount}) => {
  let isNew = notificationCount > 0 ? newNotification : null
  return (
    <div className={`${isNew ? "bg-sky-50" : ""} flex justify-between items-center mb-4 rounded-xl py-2 sm:w-[95%] sm:m-auto sm:mb-4`}>
    <span className='w-14 self-start h-14 flex items-center justify-center m-2'><img className='w-11 h-11 object-cover' src={perfilImage} alt={`${username}_image`}/></span>
    <div className='w-full'>
    <p className='text-gray-400'> <span className='text-black font-bold mr-2 sm:cursor-pointer sm:hover:text-blue-900'>{username}</span> <span className='mr-1'>{notificationContent}</span> <span className={`${notificationGroup ? "text-blue-900 font-extrabold sm:text-gray-500" : "text-gray-500"} font-bold sm:cursor-pointer sm:hover:text-blue-900`}>{post}</span> {isNew ? <><span className='inline-block w-3 h-3 bg-red-600 rounded-full'></span> </>: null}</p>
    <p className='text-gray-400 mb-4'>{date}</p>
    {notificationMessage ? <><div className='border-gray-300 border-2 p-4 mr-2 rounded-xl sm:cursor-pointer sm:hover:bg-blue-200'><p className='text-gray-500'>{message}</p></div></> : null}
    </div>
    {notificationPicture ? <><span className='w-12 h-12 sm:w-16 sm:h-16 sm:cursor-pointer'>  <img src={notificationPictureUrl} alt="image_post"/></span></> : null}
    </div>
  )
}

export default Notification