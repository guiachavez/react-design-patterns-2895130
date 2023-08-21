import React, { useState, useEffect } from "react"
import axios from 'axios'
import { UserInfo } from "./UserInfo"

export const CurrentUserLoader = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async() => {
            const response = await axios.get('/current-user')
            setUser(response.data)
        })();
    }, [])

    return (
        <>
            {/* {React.Children.map(children, child => {
                console.log(child)
                console.log({user})
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {user})
                }

                return child;
            })} */}

            <UserInfo user={user}/>
        </>
    )
}