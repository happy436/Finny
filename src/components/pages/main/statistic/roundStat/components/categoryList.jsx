import React from "react"
import Category from "./category"
import PropTypes from "prop-types"

function CategoryList({ active, data, allSpending }) {
    const maxIndex = 7
    const filteredData = data.sort((a, b) => {
        const aAllTransactions = a.transactions.reduce((prev, curr) => {
            let result = 0
            result = prev.value + curr.value
            return result
        })
        const bAllTransactions = b.transactions.reduce((prev, curr) => {
            let result = 0
            result = prev.value + curr.value
            return result
        })
        return bAllTransactions - aAllTransactions
    })
    const list = filteredData.map((item, index) =>
        index <= maxIndex ? (
            <Category
                key={index} // заменить
                data={item}
                index={index}
                count={data.length}
                active={active}
                allSpending={allSpending}
            />
        ) : null
    )

    return <>{list}</>
}

CategoryList.propTypes = {
    active: PropTypes.bool,
    data: PropTypes.array,
    allSpending: PropTypes.number
}

export default CategoryList
