import React, { useState } from 'react'

function Home() {

    const [Name,setName] = useState<string>("Sudip")



  return (
    <div>{Name}</div>
  )
}

export default Home