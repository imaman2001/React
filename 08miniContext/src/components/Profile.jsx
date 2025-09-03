import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)  // get the data from the context

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}.</div>
}

export default Profile