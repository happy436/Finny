import { createSlice } from "@reduxjs/toolkit"
import categoryService from "../services/category.service"

const categorySlice = createSlice({
    name: "category",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        categoryRequested: state => {
            state.isLoading = true
        },
        categoryReceived: (state, action) => {
            state.entities = action.payload
            state.lastFetch = Date.now()
            state.isLoading = false
        },
        categoryRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: categoryReducer, actions } = categorySlice
const { categoryRequested, categoryReceived, categoryRequestFailed } = actions

function isOutdated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true
    }
    return false
}

export const loadCategoryList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().category
    if (isOutdated(lastFetch)) {
        dispatch(categoryRequested())
        try {
            const { content } = await categoryService.fetchAll()
            dispatch(categoryReceived(content))
        } catch (error) {
            dispatch(categoryRequestFailed(error.message))
        }
    }
}

export const getCategory = () => state => state.category.entities
export const getCategoryLoadingStatus = () => state =>
    state.professions.isLoading
export const getCategoryById = profId => state => {
    if (state.professions.entities) {
        return state.professions.entities.find(p => p._id === profId)
    }
}

export default categoryReducer
