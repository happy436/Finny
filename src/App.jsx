import React from "react"
import { Route } from "react-router-dom"
import Login from "./components/pages/login/login"
import Main from "./components/pages/main/main"

function App() {
    return (
        <>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
        </>
    )
}

export default App
