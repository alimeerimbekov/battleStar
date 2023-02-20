import {createContext, useState} from "react";

export const CustomContext = createContext()

export const Context = (props) => {

    const [form, setForm] = useState(false)

    const [reg, setReg] = useState(false)

    const [stat, setStat] = useState(1)

    const value = {
        form,
        setForm,
        reg,
        setReg,
        stat,
        setStat
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}