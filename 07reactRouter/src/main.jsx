import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import {githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


// ..............another way to create the routes
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />,
      <Route path='about' element={<About />} />,
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User /> } />
      <Route 
      path='github' 
      element={<Github />} 
      loader={githubInfoLoader}
      />
    </Route>
  )
 )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
