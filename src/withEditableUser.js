import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
    return props => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`)
                console.log(response)
                setOriginalUser(response.data)
                setUser(response.data)
            })();
        }, [])

        const onChangeUser = changes => {
            setUser({...user, ...changes})
        }

        const onSaveUser = async() => {
            const response = await axios.post(`/users/${userId}`, { user })
            setOriginalUser(response.data)
            setUser(response.data)
            console.log('orig: ' + originalUser.hairColor)
            console.log('user: ' + user.hairColor)
        }

        const onResetUser = () => {
            setUser(originalUser)
        }

        return <Component {...props} 
            user={user} 
            onChangeUser = {onChangeUser}
            onSaveUser = {onSaveUser}
            onResetUser = {onResetUser}
        />
    }
}