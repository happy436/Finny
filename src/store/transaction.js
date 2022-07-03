import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"
import commentService from "../services/comment.service"
import localStorageService from "../services/localStorage.service"
import transactionService from "../services/transaction.service"

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        transactionRequested: state => {
            state.isLoading = true
        },
        transactionReceived: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        transactionRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        addTransaction: (state, action) => {
            state.entities.push(action.payload)
            state.isLoading = false
        },
        deleteTransaction: (state, action) => {
            state.entities.splice(
                state.entities.findIndex(c => c._id === action.payload.id),
                1
            )
            state.isLoading = false
        }
    }
})

const { reducer: transactionReducer, actions } = transactionSlice
const {
    transactionRequested,
    transactionReceived,
    transactionRequestFailed,
    addTransaction,
    deleteTransaction
} = actions

export const loadTransactionsList = userId => async dispatch => {
    dispatch(transactionRequested())
    try {
        const { content } = await transactionService.getTransactions(userId)
        dispatch(transactionReceived(content))
    } catch (error) {
        dispatch(transactionRequestFailed(error.message))
    }
}

export const createTransaction = data => async dispatch => {
    // edit transaction data
    const transaction = {
        ...data,
        _id: nanoid(),
        created_at: Date.now(),
        userId: localStorageService.getUserId()
    }
    dispatch(transactionRequested())
    try {
        const { content } = await commentService.createComment(transaction)
        dispatch(addTransaction(content))
    } catch (error) {
        dispatch(transactionRequestFailed(error.message))
    }
}

export const removeComment = id => async dispatch => {
    dispatch(transactionRequested())
    try {
        const { content } = await commentService.removeComment(id)
        if (content === null) {
            dispatch(deleteTransaction(id))
        }
    } catch (error) {
        dispatch(transactionRequestFailed(error.message))
    }
}

export const getComments = () => state => state.comments.entities
export const getCommentsLoadingStatus = () => state => state.comments.isLoading

export default transactionReducer
