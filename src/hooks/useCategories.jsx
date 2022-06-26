import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"
import categoryService from "../services/category.service"

const CategoryContext = React.createContext()

export const useCategories = () => {
    return useContext(CategoryContext)
}

const CategoryProvider = ({ children }) => {
    const [categories, setCategory] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const getCategories = async () => {
            try {
                const { content } = await categoryService.fetchAll()
                setCategory([...content])
                setLoading(false)
            } catch (error) {
                errorCatcher(error)
            }
        }
        getCategories()
    }, [])
    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
    }
    const getCategory = (id, type) => {
        const findData = categories[type]
        let result
        for (const d in findData) {
            if (findData[d]._id === id) {
                result = findData[d]
            }
        }
        return result
    }
    useEffect(() => {
        if (error !== null) {
            toast(error)
            setError(null)
        }
    }, [error])
    return (
        <CategoryContext.Provider
            value={{ categories, isLoading, getCategory }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

CategoryProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default CategoryProvider
