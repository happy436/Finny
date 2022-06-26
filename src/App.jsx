import React from "react"
import { /* Redirect,  */ Route, Switch } from "react-router-dom"
import CategoryEditPage from "./components/pages/category/CategoryPage"
import Login from "./components/pages/login/login"
import Main from "./components/pages/main/main"
import TransactionPage from "./components/pages/transaction"
import ImageProvider from "./hooks/useImage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Test from "./Test.test"
import CategoryProvider from "./hooks/useCategories"

function App() {
    return (
        <>
            <Switch>
                <Route path="/login" component={Login} />
                <CategoryProvider>
                    <ImageProvider>
                        <Route
                            path="/category/:type?"
                            component={CategoryEditPage}
                        />
                        <Route
                            path="/transaction/:type?"
                            component={TransactionPage}
                        />
                        <Route path="/test" component={Test} />
                        <Route path="/" exact component={Main} />
                        {/* <Redirect to="/"/> */}
                    </ImageProvider>
                </CategoryProvider>
            </Switch>
            <ToastContainer />
        </>
    )
}

export default App
