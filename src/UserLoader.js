import React, { useState, useEffect } from "react"
import axios from 'axios'
import { UserInfo } from "./UserInfo"

export const UserLoader = ({userId, children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async() => {
            const response = await axios.get(`/users/${userId}`)
            setUser(response.data)
        })();
    }, [userId])

    return (
        <>
            {React.Children.map(children, child => {
                console.log(child)
                console.log({user})
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {user})
                }

                return child;
            })}

            {/* <UserInfo user={user}/> */}
        </>
    )
}