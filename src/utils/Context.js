import {createContext, useEffect, useState} from "react";

export const CustomContext = createContext()

export const Context = (props) => {

    const [form, setForm] = useState(false)

    const [reg, setReg] = useState(false)

    const [stat, setStat] = useState(1)

    const [active, setActive] = useState(false)

    const [close, setClose] = useState(false)

    const [user, setUser] = useState( {
        email: ''
    })

    useEffect( () => {
        if (localStorage.getItem('user') !== null){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    },[])


    const value = {
        form,
        setForm,
        reg,
        setReg,
        stat,
        setStat,
        active,
        setActive,
        user,
        setUser,
        close,
        setClose
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}