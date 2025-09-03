// import React from 'react'

// const Card = ({username, fashion, btnText, imgUrl}) => {
//     console.log()
//   return (
//     <div className="mt-10 max-w-xs p-6 rounded-md shadow-md bg-black">
//         <img
//           src="https://images.pexels.com/photos/32903801/pexels-photo-32903801.jpeg"
//           alt=""
//           className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
//         />
//         <div className="mt-6 mb-2">
//           <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
//             {fashion}
//           </span>
//           <h2 className="text-xl font-semibold tracking-wide">{username} </h2>
//         </div>
//         <button>{btnText}</button>
//       </div>

//   )
// }

// export default Card


import React from 'react'

const Card = ({username , btnTxt}) => {
  return (
  <div >
    <div className=' border-2  p-10 mt-4 rounded shadow-md shadow-blue-50 max-w-xs hover:border-blue-700'>
      <img className='object-cover object-center w-full h-72 rounded-md' src="https://images.pexels.com/photos/32903801/pexels-photo-32903801.jpeg" alt="" />
      
      <div className='mt-6 mb-2'>
        <span className='block text-sm font-medium text-blue-500 font-mono tracking-widest uppercase' >
          {username}
        </span>
        <button className='px-5 bg-gray-600 py-3 mt-2 rounded border-2 hover:border-white hover:bg-gray-900'> 
          {btnTxt}
        </button>
      </div>
    </div>
  </div>

  )
}

export default Card