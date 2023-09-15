import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectUser, selectToken, setUser } from '../../features/auth/authSlice.js'
import { getUser } from "../../common/apiHandler.js"

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)

    useEffect(() => {
        getUser(token)
            .then(data => dispatch(setUser(data.body)))
    }, [])



    return (<div>{user?.email}</div>)
}

export default Profile