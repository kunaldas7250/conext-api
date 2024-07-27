import React from 'react'
import Usercontext from '../context/Usercontext'
import { useContext } from "react";
const Profile = () => {
    const { user } = useContext(Usercontext);
if(!user)return <div>please login</div>
return <div>welcome {user.username}</div>
}

export default Profile
