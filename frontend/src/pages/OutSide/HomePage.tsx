import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function Home() {

    const [Name,setName] = useState<string>("Sudip")

    useEffect (() => {
      validateToken()
      // navigation.navigate('/login')
    },[])

    const validateToken = async() => {
      const token = localStorage.getItem("token")
      if (!token) {
        return null
      }

      try {
        const request = await fetch("http://localhost:5000/users/verify", {
          method:"POST",
          headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
          }
        })

        console.log(await request.json())
        navigation.navigate('/home')
        
      } catch (error) {
        
      }
      

    }


  return (
    <div>{Name}</div>
  )
}

export default Home