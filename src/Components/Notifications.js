import React from 'react'

const Notifications = ({notificationCount}) => {
  return (
    <div className='flex items-center justify-center'>
        <h1 className='text-2xl font-bold'>Notifications</h1>
        <span className='flex items-center justify-center h-7 w-9 bg-blue-900 ml-4 rounded-lg'>
            <p className='text-white font-bold text-xl'>{notificationCount}</p>
        </span>
    </div>
  )
}

export default Notifications