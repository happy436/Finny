import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import CategoryEditPage from "./components/pages/category/CategoryPage"
import Login from "./components/pages/login/login"
import Main from "./components/pages/main/main"
import TransactionPage from "./components/pages/transaction"
import ImageProvider from "./hooks/useImage"
import SwiperTest from "./swiperTest"

function App() {
    return (
        <>
            <Switch>
                <Route path="/login" component={Login} />
                <ImageProvider>
                    <Route path="/test" component={SwiperTest} />
                    <Route path="/category/:type?" component={CategoryEditPage} />
                    <Route path="/transaction/:type?" component={TransactionPage} />
                    <Route path="/" exact component={Main} />
                </ImageProvider>
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default App
