// we use it also for calling the api and getting/fetching the any type of info

// we use it to store the user info and also the funtion to update it 

import React, {useState} from 'react'
import UserContext from './UserContext'

// create a method  
//children is like that the outlet in react router dom
// children is the component which is wrapped inside the UserCOntextProvider
const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)

    return (
        // passing the user and setuser in the value
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
