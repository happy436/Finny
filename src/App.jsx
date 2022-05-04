import React from "react"
import { Route } from "react-router-dom"
import Main from "./components/pages/main/layouts/main"

function App() {
    return (
        <>
            <Route path="/" component={Main} />
        </>
    )
}

export default App
