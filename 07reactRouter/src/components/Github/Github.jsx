import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()

  // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/imaman2001')
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data)
    //       setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-300 text-black p-4 text-3xl' >Github Followers: {data.followers}
      <img className='rounded' src={data.avatar_url} alt="Github Picture" width={200} />
    </div>
  )
}

export default Github

// this is the optimized way to fetch the data 
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/imaman2001')
  return response.json()
}