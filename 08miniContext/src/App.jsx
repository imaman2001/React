import UserContextProvider from "./context/UserContextProvider"
import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {

  return (
    <UserContextProvider >
      <h1>Context API how it work</h1>
      <br />
      <Login />
      <br />
      <Profile />
    </UserContextProvider>
  )
}

export default App
