import { React, useState, createContext, useEffect } from 'react'

export const UserDataContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        dp: "",
    })
    const [token, setToken] = useState("")

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
        }
    }, [token])


    return (
        <>
            <UserDataContext.Provider value={{ user, setUser, token, setToken }}>
                {children}
            </UserDataContext.Provider>
        </>
    )
}
