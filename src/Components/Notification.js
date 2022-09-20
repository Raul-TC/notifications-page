import React from 'react'

const Notification = ({name, Children}) => {
  return (
    <div>
    <span></span>
    <div className=''>
    {name}{Children}
    </div>

    </div>
  )
}

export default Notification