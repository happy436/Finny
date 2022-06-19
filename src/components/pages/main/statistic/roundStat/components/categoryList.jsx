import React from "react"
import Category from "./category"
import PropTypes from "prop-types"

function CategoryList({ active, getIcon, data, allSpending }) {
    const maxIndex = 7
    const list = data.map((item, index) =>
        index <= maxIndex ? (
            <Category
                key={index} // заменить
                data={item}
                index={index}
                getIcon={getIcon}
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
    getIcon: PropTypes.func,
    data: PropTypes.array,
    allSpending: PropTypes.number
}

export default CategoryList
