import React from 'react'

const MarkAsRead = ({setNotificationCount}) => {
  return (
<p className='text-[13px] sm:text-lg text-gray-400 font-bold sm:cursor-pointer sm:hover:text-blue-900' onClick={() => setNotificationCount(0)}>Mark all as read</p>  )
}

export default MarkAsRead