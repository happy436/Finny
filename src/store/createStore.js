import { combineReducers, configureStore } from "@reduxjs/toolkit"
/* import transactionReducer from "./transaction" */
import categoryReducer from "./category"

const rootReducer = combineReducers({
    /* transaction: transactionReducer, */
    category: categoryReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
