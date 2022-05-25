import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import Login from "./components/pages/login/login"
import Main from "./components/pages/main/main"
import TransactionPage from "./components/pages/transaction"

function App() {
    return (
        <>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/transaction/:type?" component={TransactionPage} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default App
