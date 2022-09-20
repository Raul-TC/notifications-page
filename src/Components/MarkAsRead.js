import React from 'react'

const MarkAsRead = ({setNotificationCount}) => {
  return (
<p className='text-gray-400' onClick={() => setNotificationCount(0)}>Mark all as read</p>  )
}

export default MarkAsRead