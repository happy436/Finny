import React from "react"
import { Route } from "react-router-dom"
import Login from "./components/pages/login/login"
import Main from "./components/pages/main/main"
import TransactionPage from "./components/pages/transaction"

function App() {
    return (
        <>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/transaction/:type?" component={TransactionPage} />
        </>
    )
}

export default App
