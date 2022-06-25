import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"
import transactionService from "../services/transaction.service"

const TransactionContext = React.createContext()

export const useTransactions = () => {
    return useContext(TransactionContext)
}

export const TransactionProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true)
    const [incomeTransaction, setIncome] = useState([])
    const [spendingTransaction, setSpending] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        getIncomeTransactionsList()
        getSpendingTransactionsList()
    }, [])
    async function getIncomeTransactionsList() {
        try {
            const { content } = await transactionService.get()
            setIncome(content)
            setLoading(false)
        } catch (error) {
            errorCather(error)
        }
    }
    async function getSpendingTransactionsList() {
        try {
            const { content } = await transactionService.get()
            setSpending(content)
            setLoading(false)
        } catch (error) {
            errorCather(error)
        }
    }
    useEffect(() => {
        if (error !== null) {
            toast.error(error)
            setError(null)
        }
    }, [error])
    function errorCather(error) {
        /* const { message } = error.response.data; */
        const { message } = error
        setError(message)
    }

    return (
        <TransactionContext.Provider
            value={{
                isLoading,
                incomeTransaction,
                spendingTransaction,
                getIncomeTransactionsList,
                getSpendingTransactionsList
            }}
        >
            {!isLoading ? children : <h1>Loading...</h1>}
        </TransactionContext.Provider>
    )
}

TransactionProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
