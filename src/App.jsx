import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import Login from "./components/pages/login/login"
import Day from "./components/pages/main/layouts/day"
import { UilUser } from "@iconscout/react-unicons"
import Context from "./components/context"
import API from "./api"

function App() {
    const [data, setData] = useState()
    useEffect(() => {
        API.data.fetchAll().then(data => {
            setData(data)
        })
    }, [])
    const getIcon = (icon, color) => {
        switch (icon) {
            case "UilUser":
                return <UilUser style={{ fill: color }} />
        }
    }
    return (
        <>
            <Context.Provider
                value={{
                    data,
                    getIcon
                }}>
                <Route path="/" exact component={Day} />
                <Route path="/login" component={Login} />
            </Context.Provider>
        </>
    )
}

export default App
