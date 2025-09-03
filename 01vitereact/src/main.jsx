import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a' , 
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   } ,
//   children: 'Click me to visit Google'
// }

// const anotherElement = (
//   <a href="https://google.com" target= "_blank">visit google</a>
// )

// const anotherUser = "  hii I'm golu"

// const reactElement = React.createElement(
//   'a',
//   { href: "https://google.com" , target: "_black"},
//   "click to visit google" ,
//   anotherUser
// ) 


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App />

  
)
