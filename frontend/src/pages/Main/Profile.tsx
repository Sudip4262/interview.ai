import React from 'react'

export default function Profile() {
  return (
    <div>Profile
        <p className='cursor-pointer' onClick={() => {localStorage.removeItem("token"); window.location.reload()}}>Log Out</p>
    </div>
  )
}
